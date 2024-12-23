<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\DestroysBiblioRequest;
use App\Http\Requests\Bibliography\IndexBiblioRequest;
use App\Http\Requests\Bibliography\SearchRequest;
use App\Http\Requests\Bibliography\StoreBiblioRequest;
use App\Http\Requests\Bibliography\UpdateBiblioRequest;
use App\Repositories\Bibliography\BiblioRepository;
use App\Repositories\Bibliography\ItemCodePatternRepository;
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
    protected $itemCodePatternRepository;

    public function __construct(BiblioService $biblioService, BiblioRepository $biblioRepository, PhotoService $photoService, BiblioDTOFactory $biblioDTOFactory, ItemCodePatternRepository $itemCodePatternRepository)
    {
        $this->biblioService = $biblioService;
        $this->biblioRepository = $biblioRepository;
        $this->photoService = $photoService;
        $this->biblioDTOFactory = $biblioDTOFactory;
        $this->itemCodePatternRepository = $itemCodePatternRepository;
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
            // Data sudah tervalidasi oleh IndexBiblioRequest

            $biblios = $this->biblioRepository->index();

            return Inertia::render('Bibliography/Bibliographies', ['biblios' => $biblios]);
        } catch (\Exception $e) {
            // Log the error for debugging
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
        $itemCodePatterns = $this->itemCodePatternRepository->index();

        return Inertia::render('Bibliography/CreateBibliography', ['itemCodePatterns' => $itemCodePatterns]);
    }

    public function store(StoreBiblioRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh StoreBiblioRequest
            $validatedData = $request->validated();
            // dd($validatedData);
            $this->biblioService->storeBiblio($validatedData);

            return redirect()->route('bibliographies.create')
                ->with(['message' => __('message.success.stored', ['entity' => 'Biblio'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Biblio'])]);
        }
    }

    /**
     * Show the form for editing the specified bibliography.
     *
     * @return \Inertia\Response
     */
    public function edit($biblio)
    {
        try {
            $biblio->load(['language', 'publisher', 'place', 'authors.author', 'items']);

            $itemCodePatterns = $this->itemCodePatternRepository->index();
            
            return Inertia::render('Bibliography/EditBibliography', ['biblio' => $biblio, 'itemCodePatterns' => $itemCodePatterns]);
        } catch (\Exception $e) {
            \Log::error('Failed to fetch biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.fetched', ['entity' => 'Biblio'])]);
        }
    }


    public function update(UpdateBiblioRequest $request, $biblio)
    {
        try {
            // Data sudah tervalidasi oleh UpdateBiblioRequest
            $validatedData = $request->validated();
            
            // Panggil service untuk melakukan update
            $this->biblioService->updateBiblio($validatedData, $biblio);
            
            return redirect()->back()
                ->with(['message' => __('message.success.updated', ['entity' => 'Biblio'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to update biblios: ' . $e->getMessage());
        dd($e->getMessage());

            return redirect()->back()->withErrors(['error' => __('message.error.updated', ['entity' => 'Biblio'])]);
        }
    }
    public function destroy($biblio)
    {
        try {
            $this->biblioService->deleteBiblio($biblio);

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
    public function search(SearchRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh SearchBiblioRequest
            $validatedData = $request->validated();

            $biblios = $this->biblioRepository->search($validatedData['searchKey']);
            return Inertia::render('Bibliography/Bibliographies', [
                'biblios' => $biblios,
                'filters' => $request->only(['searchKey'])
            ]);
            // return response()->json($biblios);

        } catch (\Exception $e) {
            // Menyimpan log error
            \Log::error('Failed to search biblios: ' . $e->getMessage());

            // Menyediakan feedback kepada pengguna
            redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'Member'])]);
        }
    }
}



