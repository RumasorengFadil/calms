<?php

namespace App\Http\Controllers\Bibliography;

use App\DTOs\BiblioDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\StoreBiblioRequest;
use App\Services\BiblioService;

class CreateBiblioController extends Controller
{
    protected $biblioService;
    public function __construct(BiblioService $biblioService)
    {
        $this->biblioService = $biblioService;
    }
    public function createBiblio(StoreBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh AddBiblioRequest
            $validatedData = $request->validated();

            $biblioTDO = new BiblioDTO(
                [
                    "authors" => $validatedData["authors"],
                ],
                [
                    "languageName" => $validatedData["languageName"]
                ],
                [
                    "publisherName" => $validatedData["publisherName"]
                ],
                [
                    "placeName" => $validatedData["placeName"]
                ],
                [
                    "patternName" => $validatedData["patternName"]
                ],
                [
                    "title" => $validatedData["title"],
                    "edition" => $validatedData["edition"],
                    "itemCodePattern" => $validatedData["itemCodePattern"],
                    "totalItem" => $validatedData["totalItem"],
                    "isbn_issn" => $validatedData["isbn_issn"],
                    "publisherId" => $validatedData["publisherId"],
                    "languageId" => $validatedData["languageId"],
                    "publishPlaceId" => $validatedData["publishPlaceId"],
                    "expire_date" => $validatedData["expire_date"],
                    "inst_name" => $validatedData["inst_name"],
                    "member_address" => $validatedData["member_address"],
                    "postal_code" => $validatedData["postal_code"],
                    "member_phone" => $validatedData["member_phone"],
                    "pin" => $validatedData["pin"],
                    "member_photo" => $validatedData["member_photo"],
                    "member_photo_path" => $validatedData["member_photo_path"],
                    "member_email" => $validatedData["member_email"],
                    "member_password" => $validatedData["member_password"],
                ],
                

                //tambahkan
            );
            $this->biblioService->createBiblioWithRelations($biblioTDO);



        } catch (\Exception $e) {

        }

    }
}
