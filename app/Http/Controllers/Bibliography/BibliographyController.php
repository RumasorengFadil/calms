<?php

namespace App\Http\Controllers\Bibliography;

use App\DTOs\BiblioDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\CreateBiblioRequest;
use App\Http\Requests\Bibliography\UpdateBiblioRequest;
use App\Repositories\Bibliography\BiblioRepository;
use App\Services\BiblioService;
use App\Services\PhotoService;
use Inertia\Inertia;

class BibliographyController extends Controller
{
    protected $biblioService;
    protected $biblioRepository;
    protected $photoService;

    public function __construct(BiblioService $biblioService, BiblioRepository $biblioRepository, PhotoService $photoService)
    {
        $this->biblioService = $biblioService;
        $this->biblioRepository = $biblioRepository;
        $this->photoService = $photoService;

    }
    public function index()
    {
        try {
            $biblios = $this->biblioRepository->index(10);
            return Inertia::render('Bibliography/Bibliographies', ["biblios" => $biblios]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to fetch member: " . $e->getMessage());

            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __("message.error.fetched", ["entity" => "Biblio"])]);
        }
    }

    public function create()
    {
        return Inertia::render('Bibliography/CreateBibliography');
    }
    public function store(CreateBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh CreateBiblioRequest
            $validatedData = $request->validated();

            // Handle gambar biblio
            $filename = $this->photoService->handlePhoto($validatedData->file('biblioPhoto'), 'biblio');

            // Perbarui validatedData        
            $validatedData += ['biblioPhotoPath' => $filename];

            $biblioDTO = new BiblioDTO(
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
            $this->biblioService->createBiblioWithRelations($biblioDTO);

            return redirect()->route('membership.create')
                ->with(["message" => __("message.success.stored", ["entity" => "Biblio"])]);
        } catch (\Exception $e) {
            \Log::error("Failed to fetch biblios: " . $e->getMessage());
            redirect()->back()->withErrors(['error' => __("message.error.stored", ["entity" => "Biblio"])]);
        }
    }
    public function edit()
    {
        return Inertia::render('Bibliography/EditBibliography');
    }
    public function update(UpdateBiblioRequest $request)
    {
        // Data sudah tervalidasi oleh CreateBiblioRequest
        $validatedData = $request->validated();

        // Handle gambar biblio
        $filename = $this->photoService->handlePhoto($validatedData->file('biblioPhoto'), 'biblio');

        // Perbarui validatedData        
        $validatedData += ['biblioPhotoPath' => $filename];

        $biblioDTO = new BiblioDTO(
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
        $this->biblioService->createBiblioWithRelations($biblioDTO);

        return redirect()->route('membership.update')
            ->with(["message" => __("message.success.updated", ["entity" => "Biblio"])]);
    }
}
