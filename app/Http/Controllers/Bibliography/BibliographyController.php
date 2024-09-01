<?php

namespace App\Http\Controllers\Bibliography;

use App\DTOs\BiblioDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\CreateBiblioRequest;
use App\Services\BiblioService;
use Inertia\Inertia;

class BibliographyController extends Controller
{
    protected $biblioService;
    public function __construct(BiblioService $biblioService)
    {
        $this->biblioService = $biblioService;
    }
    public function index()
    {
        return Inertia::render('Bibliography/Bibliographies');
    }

    public function create()
    {
        return Inertia::render('Bibliography/CreateBibliography');
    }
    public function edit()
    {
        return Inertia::render('Bibliography/EditBibliography');
    }
    public function store(CreateBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh CreateBiblioRequest
            $validatedData = $request->validated();

            $biblioTDO = new BiblioDTO(
                [
                    'authors' => $validatedData['authors'],
                ],
                [
                    'languageName' => $validatedData['languageName']
                ],
                [
                    'publisherName' => $validatedData['publisherName']
                ],
                [
                    'placeName' => $validatedData['placeName']
                ],
                [
                    'title' => $validatedData['title'],
                    'edition' => $validatedData['edition'],
                    'totalItem' => $validatedData['totalItem'],
                    'isbn_issn' => $validatedData['isbn_issn'],
                    'publisherId' => $validatedData['publisherId'],
                    'languageId' => $validatedData['languageId'],
                    'publishPlaceId' => $validatedData['publishPlaceId'],
                    'expire_date' => $validatedData['expire_date'],
                    'inst_name' => $validatedData['inst_name'],
                    'member_address' => $validatedData['member_address'],
                    'postal_code' => $validatedData['postal_code'],
                    'member_phone' => $validatedData['member_phone'],
                    'pin' => $validatedData['pin'],
                    'member_photo' => $validatedData['member_photo'],
                    'member_photo_path' => $validatedData['member_photo_path'],
                    'member_email' => $validatedData['member_email'],
                    'member_password' => $validatedData['member_password'],
                ],
                [   
                    'itemCodePattern' => $validatedData['itemCodePattern'],
                    'totalItems' => $validatedData['totalItems']
                ]


                //tambahkan
            );
            $this->biblioService->createBiblioWithRelations($biblioTDO);
        } catch (\Exception $e) {

        }
    }
}
