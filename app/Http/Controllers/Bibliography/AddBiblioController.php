<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\AddBiblioRequest;
use App\Models\Biblio;
use App\Models\MstAuthor;
use App\Models\MstLanguage;
use App\Models\MstPlace;
use App\Models\MstPublisher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AddBiblioController extends Controller
{
    public function addBiblio(AddBiblioRequest $request)
    {
        try {


            DB::transaction(function () use ($request) {
                $author = MstAuthor::addAuthor($request);
                $language = MstLanguage::addLanguage($request);
                $publisher = MstPublisher::addPublisher($request);
                $place = MstPlace::addPlace($request);

                Biblio::addBiblio($request->all() +
                    [
                        "publisherId" => $publisher->publisher_id,
                        "languageId" => $language->language_id,
                        "placeId" => $place->place_id
                    ]);

            });

        } catch (\Exception $e) {

        }

    }
}
