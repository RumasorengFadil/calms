<?php

namespace App\Http\Controllers\Bibliography;

use App\DTOs\BiblioDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\DestroysBiblioRequest;
use App\Http\Requests\Bibliography\IndexBiblioRequest;
use App\Http\Requests\Bibliography\SearchBiblioRequest;
use App\Http\Requests\Bibliography\StoreBiblioRequest;
use App\Http\Requests\Bibliography\UpdateBiblioRequest;
use App\Models\Biblio;
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
    public function index(IndexBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh SearchBiblioRequest
            $validatedData = $request->validated();

            if ($validatedData) {
                $biblios = $this->biblioRepository->search($validatedData['biblioSearchKey']);
            } else {
                $biblios = $this->biblioRepository->index();
            }

            return Inertia::render('Bibliography/Bibliographies', ['biblios' => $biblios]);
        } catch (\Exception $e) {
            // Log the error for debugging
            dd($e->getMessage());
            \Log::error('Failed to fetch member: ' . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->withErrors(['error' => __('message.error.fetched', ['entity' => 'Biblio'])]);
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

    public function store(StoreBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh StoreBiblioRequest
            $validatedData = $request->validated();

            $this->biblioService->storeBiblio($validatedData);

            return redirect()->route('bibliographies.create')
                ->with(['message' => __('message.success.stored', ['entity' => 'Biblio'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to fetch biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Biblio'])]);
        }
    }

    /**
     * Show the form for editing the specified bibliography.
     *
     * @return \Inertia\Response
     */
    public function edit()
    {
        return Inertia::render('Bibliography/EditBibliography');
    }


    public function update(UpdateBiblioRequest $request, $biblioId)
    {
        try {
            // Data sudah tervalidasi oleh UpdateBiblioRequest
            $validatedData = $request->validated();

            // Panggil service untuk melakukan update
            $this->biblioService->updateBiblio($validatedData, $biblioId);

            return redirect()->route('bibliographies.edit')
                ->with(['message' => __('message.success.updated', ['entity' => 'Biblio'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to update biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.updated', ['entity' => 'Biblio'])]);
        }
    }
    public function destroy($biblioId)
    {
        try {
            $this->biblioService->deleteBiblio($biblioId);

            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Biblio'])]);

        } catch (\Exception $e) {
            \Log::error('Failed to update biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Biblio'])]);
        }
    }
    public function destroys(DestroysBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh DestroysBiblioRequest
            $validatedData = $request->validated();

            $this->biblioService->deleteBiblios($validatedData['selectedBiblioIds']);

            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Biblio'])]);

        } catch (\Exception $e) {
            \Log::error('Failed to update biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Biblio'])]);
        }
    }
    public function search(SearchBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh SearchBiblioRequest
            $validatedData = $request->validated();

            $biblios = $this->biblioRepository->search($validatedData["biblioSearchKey"]);

            return Inertia::render('Bibliography/Bibliographies', ['biblios' => $biblios]);
        } catch (\Exception $e) {
            // Menyimpan log error
            \Log::error('Failed to search biblios: ' . $e->getMessage());

            // Menyediakan feedback kepada pengguna
            return Inertia::render('Bibliography/Bibliographies', [
                'errors' => ['error' => __('message.error.search', ['entity' => 'Biblio'])]
            ]);
        }
    }
}
