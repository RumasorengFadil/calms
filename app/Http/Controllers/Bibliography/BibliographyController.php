<?php

namespace App\Http\Controllers\Bibliography;

use App\DTOs\BiblioDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\CreateBiblioRequest;
use App\Http\Requests\Bibliography\UpdateBiblioRequest;
use App\Repositories\Bibliography\BiblioRepository;
use App\Services\BiblioDTOFactory;
use App\Services\BiblioService;
use App\Services\PhotoService;
use Inertia\Inertia;

class BibliographyController extends Controller
{
    protected $biblioService;
    protected $biblioRepository;
    protected $photoService;
    protected $biblioDTOFactory;

    /**
     * Create a new controller instance.
     *
     * @param BiblioService $biblioService Service for handling bibliography operations.
     * @param BiblioRepository $biblioRepository Repository for bibliography data.
     * @param PhotoService $photoService Service for handling photo operations.
     * @param biblioDTOFactory $ Service for make a DTO.
     */

    public function __construct(BiblioService $biblioService, BiblioRepository $biblioRepository, PhotoService $photoService, BiblioDTOFactory $biblioDTOFactory)
    {
        $this->biblioService = $biblioService;
        $this->biblioRepository = $biblioRepository;
        $this->photoService = $photoService;
        $this->biblioDTOFactory = $biblioDTOFactory;
    }

    /**
     * Display a listing of bibliographies.
     *
     * @return \Inertia\Response
     * @return mixed
     */
    public function index()
    {
        try {
            $biblios = $this->biblioRepository->index(10);
            return Inertia::render('Bibliography/Bibliographies', ["biblios" => $biblios]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to fetch member: " . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->withErrors(['error' => __("message.error.fetched", ["entity" => "Biblio"])]);
        }
    }


    /**
     * Show the form for creating a new bibliography.
     *
     * @return \Inertia\Response;
     */
    public function create()
    {
        return Inertia::render('Bibliography/CreateBibliography');
    }

    /**
     * Store a newly created bibliography in storage.
     *
     * @param CreateBiblioRequest $request The request instance containing the data for creating bibliography.
     * @return \Illuminate\Http\RedirectResponse Redirects to the create page with a success or error message.
     * @throws \Exception If any operation within the store process fails.
     */
    public function store(CreateBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh CreateBiblioRequest
            $validatedData = $request->validated();

            // Handle gambar biblio
            $filename = $this->photoService->handlePhoto($validatedData->file('biblioPhoto'), 'biblio');

            // Perbarui validatedData        
            $validatedData += ['biblioPhotoPath' => $filename];

            // Membuat biblioDTO
            $biblioDTO = $this->biblioDTOFactory->create($validatedData);

            $this->biblioService->createBiblioWithRelations($biblioDTO);

            return redirect()->route('membership.create')
                ->with(["message" => __("message.success.stored", ["entity" => "Biblio"])]);
        } catch (\Exception $e) {
            \Log::error("Failed to fetch biblios: " . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __("message.error.stored", ["entity" => "Biblio"])]);
        }
    }
    public function edit()
    {
        return Inertia::render('Bibliography/EditBibliography');
    }

    /**
     * Update an existing Bibliography entry and its associated data.
     *
     * This method performs the following actions:
     * - Validates the incoming request data.
     * - Removes the previous photo associated with the bibliography.
     * - Handles and stores the new photo.
     * - Updates the bibliography and related entities using the BiblioService.
     *
     * @param UpdateBiblioRequest $request The request instance containing the data for updating bibliography.
     * @param int $biblioId The ID of the bibliography entry to update.
     * @return \Illuminate\Http\RedirectResponse Redirects to the edit page with a success or error message.
     * @throws \Exception If any operation within the update process fails.
     */
    public function update(UpdateBiblioRequest $request, $biblioId)
    {
        try {
            // Data sudah tervalidasi oleh CreateBiblioRequest
            $validatedData = $request->validated();

            // Menghapus data foto sebelumnya
            $this->photoService->removePhoto($validatedData->memberPhotoPath, 'biblio');

            // Handle gambar biblio
            $filename = $this->photoService->handlePhoto($validatedData->file('biblioPhoto'), 'biblio');

            // Perbarui validatedData        
            $validatedData += ['biblioPhotoPath' => $filename];

            // Membuat biblioDTO
            $biblioDTO = $this->biblioDTOFactory->create($validatedData);

            $this->biblioService->updateBiblioWithRelations($biblioDTO, $biblioId);

            return redirect()->route('membership.edit')
                ->with(["message" => __("message.success.updated", ["entity" => "Biblio"])]);
        } catch (\Exception $e) {
            \Log::error("Failed to update biblios: " . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __("message.error.updated", ["entity" => "Biblio"])]);
        }
    }
}
