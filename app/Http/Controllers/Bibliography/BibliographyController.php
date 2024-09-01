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
                    'isbn_issn' => $validatedData['isbnIssn'],
                    'publisher_id' => $validatedData['publisherId'],
                    'language_id' => $validatedData['languageId'],
                    'publish_place_id' => $validatedData['publishPlaceId'],
                    'publish_year' => $validatedData['publishYear'],
                    'collation' => $validatedData['collation'],
                    'category' => $validatedData['category'],
                    'biblio_photo' => $validatedData['biblioPhoto'],
                    'biblio_photo_path' => $validatedData['biblioPhotoPath'],
                ],
                [
                    'itemCodePattern' => $validatedData['itemCodePattern'],
                    'totalItems' => $validatedData['totalItems']
                ]
            );
            $this->biblioService->createBiblioWithRelations($biblioTDO);

            return redirect()->route('membership.create')
                ->with(["message" => __("message.success.stored", ["entity" => "Biblio"])]);
        } catch (\Exception $e) {
            redirect()->back()->withErrors(['error' => __("message.error.stored", ["entity" => "Biblio"])]);
        }
    }
}
