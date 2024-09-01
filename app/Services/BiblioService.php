<?php

namespace App\Services;

use App\DTOs\BiblioDTO;
use App\Models\BiblioAuthor;
use App\Models\Item;
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

    public function __construct(
        MstLanguageRepository $mstLanguageRepository,
        MstAuthorRepository $mstAuthorRepository,
        MstPublisherRepository $mstPublisherRepository,
        MstPlaceRepository $mstPlaceRepository,
        BiblioRepository $biblioRepository,
        BiblioAuthorRepository $biblioAuthorRepository,
        ItemRepository $itemRepository
    ) {
        $this->mstLanguageRepository = $mstLanguageRepository;
        $this->mstAuthorRepository = $mstAuthorRepository;
        $this->mstPublisherRepository = $mstPublisherRepository;
        $this->mstPlaceRepository = $mstPlaceRepository;
        $this->biblioRepository = $biblioRepository;
        $this->biblioAuthorRepository = $biblioAuthorRepository;
        $this->itemRepository = $itemRepository;
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
                $createdLanguage = $this->mstLanguageRepository->createLanguage($biblioDTO->getLanguageData());

                // Create new Publisher entry and retrieve the created Publisher object
                $createdPublisher = $this->mstPublisherRepository->createPublisher($biblioDTO->getPublisherData());

                // Create new Place entry and retrieve the created Place object
                $createdPlace = $this->mstPlaceRepository->createPlace($biblioDTO->getPlaceData());

                // Create new Bibliography entry with the IDs of the newly created Publisher, Language, and Place
                $createdBiblio = $this->biblioRepository->createBiblio($biblioDTO->getBiblioData() + [
                    "publisherId" => $createdPublisher->publisher_id,
                    "languageId" => $createdLanguage->language_id,
                    "placeId" => $createdPlace->place_id
                ]);

                // Assign authors to the created Bibliography entry
                $this->biblioAuthorRepository->assignAuthorToBiblio($biblioDTO->getAuthorData() + [
                    "biblioId" => $createdBiblio->biblio_id,
                ]);

                // Create items associated with the created Bibliography entry
                $this->itemRepository->createItem($biblioDTO->getItemData() + ['biblioId' => $createdBiblio->biblio_id]);
            });
        } catch (Exception $e) {
            // Log the error for debugging
            Log::error('Failed to create biblio with relations: ' . $e->getMessage());

            // Handle error (return a custom exception or a specific response)
            throw new Exception("Failed to create biblio", 0, $e);
        }
    }
}