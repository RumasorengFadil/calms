<?php

namespace App\Services;

use App\Models\Biblio;
use App\Models\BiblioAuthor;
use App\Models\Item;
use App\Models\MstAuthor;
use App\Models\MstLanguage;
use App\Models\MstPlace;
use App\Models\MstPublisher;
use DB;

class BiblioService
{
    public static function createBiblioWithRelations($request)
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