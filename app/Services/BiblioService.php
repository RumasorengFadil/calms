<?php

namespace App\Services;

use App\DTOs\BiblioDTO;
use App\Models\Biblio;
use App\Repositories\Bibliography\BiblioAuthorRepository;
use App\Repositories\Bibliography\BiblioRepository;
use App\Repositories\Bibliography\ItemRepository;
use App\Repositories\Bibliography\MstAuthorRepository;
use App\Repositories\Bibliography\MstLanguageRepository;
use App\Repositories\Bibliography\MstPlaceRepository;
use App\Repositories\Bibliography\MstPublisherRepository;
use DB;
use Exception;
use Log;

class BiblioService
{
    protected $mstPlaceRepository;
    protected $mstLanguageRepository;
    protected $mstAuthorRepository;
    protected $mstPublisherRepository;
    protected $biblioRepository;
    protected $biblioAuthorRepository;
    protected $itemRepository;
    protected $photoService;
    protected $biblioDTOFactory;

    public function __construct(
        MstLanguageRepository $mstLanguageRepository,
        MstAuthorRepository $mstAuthorRepository,
        MstPublisherRepository $mstPublisherRepository,
        MstPlaceRepository $mstPlaceRepository,
        BiblioRepository $biblioRepository,
        BiblioAuthorRepository $biblioAuthorRepository,
        ItemRepository $itemRepository,
        PhotoService $photoService,
        BiblioDTOFactory $biblioDTOFactory,
    ) {
        $this->mstLanguageRepository = $mstLanguageRepository;
        $this->mstAuthorRepository = $mstAuthorRepository;
        $this->mstPublisherRepository = $mstPublisherRepository;
        $this->mstPlaceRepository = $mstPlaceRepository;
        $this->biblioRepository = $biblioRepository;
        $this->biblioAuthorRepository = $biblioAuthorRepository;
        $this->itemRepository = $itemRepository;
        $this->photoService = $photoService;
        $this->biblioDTOFactory = $biblioDTOFactory;
    }
    /**
     * Create a new Bibliography entry with its associated data.
     *
     * This method performs a series of database operations within a transaction to ensure
     * data consistency. If any operation fails, the entire transaction will be rolled back.
     *
     * @param BiblioDTO $biblioDTO Data Transfer Object containing all necessary data for creating a bibliography and related entities.
     * @return void
     * @throws \Exception If any operation within the transaction fails.
     */
    public function createBiblioWithRelations(BiblioDTO $biblioDTO)
    {
        try {
            DB::transaction(function () use ($biblioDTO) {
                // Create new Language entry and retrieve the created Language object
                $createdLanguage = $this->mstLanguageRepository->store($biblioDTO->getLanguageData());

                // Create new Publisher entry and retrieve the created Publisher object
                $createdPublisher = $this->mstPublisherRepository->store($biblioDTO->getPublisherData());

                // Create new Place entry and retrieve the created Place object
                $createdPlace = $this->mstPlaceRepository->store($biblioDTO->getPlaceData());

                // Create new Bibliography entry with the IDs of the newly created Publisher, Language, and Place
                $createdBiblio = $this->biblioRepository->store($biblioDTO->getBiblioData() + [
                    "publisherId" => $createdPublisher->publisher_id,
                    "languageId" => $createdLanguage->language_id,
                    "publishPlaceId" => $createdPlace->place_id
                ]);

                // Assign authors to the created Bibliography entry
                $this->biblioAuthorRepository->assignAuthorToBiblio($biblioDTO->getAuthorData() + [
                    "biblioId" => $createdBiblio->biblio_id,
                ]);

                // Create items associated with the created Bibliography entry
                $this->itemRepository->store($biblioDTO->getItemData() + ['biblioId' => $createdBiblio->biblio_id]);
            });
        } catch (Exception $e) {
            // Log the error for debugging
            Log::error('Failed to create biblio with relations: ' . $e->getMessage());
            // Handle error (return a custom exception or a specific response)
            throw new Exception("Failed to create biblio", 0, $e);
        }
    }

    /**
     * Update an existing Bibliography entry and its associated data.
     *
     * This method performs a series of database operations within a transaction to ensure
     * data consistency. If any operation fails, the entire transaction will be rolled back.
     *
     * @param BiblioDTO $biblioDTO Data Transfer Object containing all necessary data for updating a bibliography and related entities.
     * @param int $biblioId The ID of the Bibliography entry to update.
     * @return void
     * @throws \Exception If any operation within the transaction fails.
     */
    public function updateBiblioWithRelations(BiblioDTO $biblioDTO, $biblio)
    {
        try {
            $biblioId = $biblio->biblio_id;
            DB::transaction(function () use ($biblioDTO, $biblioId) {
                // Update Language entry and retrieve the updated Language object
                $createdLanguage = $this->mstLanguageRepository->update($biblioDTO->getLanguageData(), $biblioId);

                // Update Publisher entry and retrieve the updated Publisher object
                $createdPublisher = $this->mstPublisherRepository->update($biblioDTO->getPublisherData(), $biblioId);

                // Update Place entry and retrieve the updated Place object
                $createdPlace = $this->mstPlaceRepository->update($biblioDTO->getPlaceData(), $biblioId);

                // Update Bibliography entry with the IDs of the newly updated Publisher, Language, and Place
                $createdBiblio = $this->biblioRepository->update($biblioDTO->getBiblioData() + [
                    "publisherId" => $createdPublisher->publisher_id,
                    "languageId" => $createdLanguage->language_id,
                    "publishPlaceId" => $createdPlace->place_id
                ], $biblioId);

                // Sync authors to the updated Bibliography entry
                $this->biblioAuthorRepository->syncAuthorsWithBiblio($biblioDTO->getAuthorData() + ['biblioId' => $createdBiblio->biblio_id]);

                // Update items associated with the updated Bibliography entry
                $this->itemRepository->store($biblioDTO->getItemData() + ['biblioId' => $createdBiblio->biblio_id]);
            });
        } catch (Exception $e) {
            // Log the error for debugging
            Log::error('Failed to update biblio with relations: ' . $e->getMessage());
            dd($e->getMessage());
            // Handle error (return a custom exception or a specific response)
            throw new Exception("Failed to update biblio", 0, $e);
        }
    }

    public function storeBiblio($validatedData)
    {
        // Handle gambar biblio
        $filename = $this->photoService->handlePhoto($validatedData['biblioPhoto'], 'biblio');

        // Membuat biblioDTO

        $biblioDTO = $this->biblioDTOFactory->create($validatedData + ['biblioPhotoPath' => $filename]);
        // dd($validatedData);

        $this->createBiblioWithRelations($biblioDTO);
    }
    public function updateBiblio($validatedData, $biblio)
    {
        // Handle foto dalam service layer
        $filename = $this->photoService
            ->handleUpdatePhoto($validatedData["biblioPhoto"], $biblio["biblio_photo_path"], 'biblio');

        //Perbarui biblioPhotoPath
        $validatedData['biblioPhotoPath'] = $filename;

        // Membuat biblioDTO
        $biblioDTO = $this->biblioDTOFactory->create($validatedData);

        // Update bibliografi dengan relasinya
        $this->updateBiblioWithRelations($biblioDTO, $biblio);
    }

    public function deleteBiblio($biblio)
    {
        $this->photoService->removePhoto($biblio->biblio_photo_path, 'biblio');

        $this->biblioRepository->destroy($biblio);
    }
    public function deleteBiblios(array $selectedBiblioIds)
    {
        DB::transaction(function () use ($selectedBiblioIds) {
            $biblios = Biblio::whereIn('biblio_id', $selectedBiblioIds)->get();
            foreach ($biblios as $biblio) {
                $this->photoService->removePhoto($biblio->biblioPhotoPath, 'biblio');

                $this->biblioRepository->destroy($biblio);
            }
        });
    }
}