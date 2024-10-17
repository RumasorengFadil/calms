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
}
