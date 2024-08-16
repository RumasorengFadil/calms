<?php

namespace App\Services;

use App\DTOs\BiblioDTO;
use App\Models\Biblio;
use App\Models\BiblioAuthor;
use App\Models\Item;
use App\Models\MstAuthor;
use App\Models\MstLanguage;
use App\Models\MstPlace;
use App\Models\MstPublisher;
use App\Repositories\Bibliography\AuthorRepository;
use App\Repositories\Bibliography\BiblioRepository;
use App\Repositories\Bibliography\ItemRepository;
use App\Repositories\Bibliography\LanguageRepository;
use App\Repositories\Bibliography\PlaceRepository;
use App\Repositories\Bibliography\PublisherRepository;
use DB;

class BiblioService
{
    protected $authorRepository;
    protected $placeRepository;
    protected $languageRepository;
    protected $publisherRepository;
    protected $biblioRepository;
    protected $itemRepository;

    public function __construct(
        AuthorRepository $authorRepository,
        LanguageRepository $languageRepository,
        PublisherRepository $publisherRepository,
        PlaceRepository $placeRepository,
        BiblioRepository $biblioRepository,
        ItemRepository $itemRepository
    ) {
        $this->authorRepository = $authorRepository;
        $this->languageRepository = $languageRepository;
        $this->publisherRepository = $publisherRepository;
        $this->placeRepository = $placeRepository;
        $this->biblioRepository = $biblioRepository;
        $this->itemRepository = $itemRepository;
    }
    public function createBiblioWithRelations(BiblioDTO $biblioDTO)
    {
        DB::transaction(function () use ($request) {
            $author = MstAuthor::addAuthor($request);
            $language = MstLanguage::addLanguage($request);
            $publisher = MstPublisher::addPublisher($request);
            $place = MstPlace::addPlace($request);

            $biblio = Biblio::addBiblio($request->all() +
                [
                    "publisherId" => $publisher->publisher_id,
                    "languageId" => $language->language_id,
                    "placeId" => $place->place_id
                ]);

            BiblioAuthor::assignAuthorToBiblio(
                [
                    "biblioId" => $biblio->biblio_id,
                    "authorId" => $author->author_id
                ]
            );

            Item::addItem($request->all() + ["itemCode" => ItemCodeGenerator::generateItemCode($request->itemCodePattern)]);

        });
    }
}