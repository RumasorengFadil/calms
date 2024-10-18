<?php

namespace App\Http\Controllers;

use App\Http\Requests\Bibliography\SearchRequest;
use App\Repositories\Bibliography\BiblioRepository;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Route;

class WelcomeController extends Controller
{
    protected $biblioRepository;
    public function __construct(BiblioRepository $biblioRepository)
    {
        $this->biblioRepository = $biblioRepository;
    }
    public function index(SearchRequest $request)
    {

        // Data sudah tervalidasi oleh SearchBiblioRequest
        $validatedData = $request->validated();
        $biblios = null;
        $favoriteBooks = null;
        $latestBooks = null;

        if ($validatedData) {
            $biblios = $this->biblioRepository->search($validatedData['searchKey']);
        } else {
            $favoriteBooks = $this->biblioRepository->getFavoriteBooks();
            $latestBooks = $this->biblioRepository->getLatestBooks();
        }
        
        return Inertia::render('Welcome', [
            'favoriteBooks' => $favoriteBooks,
            'latestBooks' => $latestBooks,
            'biblios' => $biblios,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function show($biblio)
    {

        $biblio->load(['authors.author', 'publisher', 'language']);
        try {
            return Inertia::render('Bibliography/ShowBibliography', [
                'biblio' => $biblio
            ]);

        } catch (\Exception $e) {
            \Log::error('Failed to fetch biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.fetched', ['entity' => 'Biblio'])]);
        }
    }
}
