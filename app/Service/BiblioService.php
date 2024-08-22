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
    public function createBiblioWithRelations(BiblioDTO $biblioDTO)
    {
        DB::transaction(function () use ($biblioDTO) {
            $createdAuthor = $this->mstAuthorRepository->createAuthor($biblioDTO->getAuthorData());
            $createdLanguage = $this->mstLanguageRepository->createLanguage($biblioDTO->getLanguageData());
            $createdPublisher = $this->mstPublisherRepository->createPublisher($biblioDTO->getPublisherData());
            $createdPlace = $this->mstPlaceRepository->createPlace($biblioDTO->getPlaceData());

            $createdBiblio = $this->biblioRepository->createBiblio($biblioDTO->getBiblioData() + [
                "publisherId" => $createdPublisher->publisher_id,
                "languageId" => $createdLanguage->language_id,
                "placeId" => $createdPlace->place_id
            ]);

            $assignedBiblioAuthor = $this->biblioAuthorRepository->assignAuthorToBiblio($biblioDTO->getAuthorData() + [
                "biblioId" => $createdBiblio->biblio_id,
                "authorId" => $createdAuthor->author_id
            ]);
            $createdItem = $this->itemRepository->createItem($biblioDTO->getItemData() + [
                "itemCode" => ItemCodeGenerator::generateItemCode(
                    $biblioDTO->getBiblioData()["itemCodePattern"]
                )
            ]);
            //lanjut dinisi

            // Item::addItem($biblioDTO->all() + ["itemCode" => ItemCodeGenerator::generateItemCode($request->itemCodePattern)]);

        });
    }
}

//Simple Version 
// public function createBiblioWithRelations(BiblioDTO $biblioDTO)
//     {
//         DB::transaction(function () use ($biblioDTO) {
//             $author = MstAuthor::addAuthor($biblioDTO);
//             $language = MstLanguage::addLanguage($biblioDTO);
//             $publisher = MstPublisher::addPublisher($biblioDTO);
//             $place = MstPlace::addPlace($biblioDTO);

//             $biblio = Biblio::addBiblio($biblioDTO->all() +
//                 [
//                     "publisherId" => $publisher->publisher_id,
//                     "languageId" => $language->language_id,
//                     "placeId" => $place->place_id
//                 ]);

//             BiblioAuthor::assignAuthorToBiblio(
//                 [
//                     "biblioId" => $biblio->biblio_id,
//                     "authorId" => $author->author_id
//                 ]
//             );

//             Item::addItem($biblioDTO->all() + ["itemCode" => ItemCodeGenerator::generateItemCode($request->itemCodePattern)]);

//         });
//     }