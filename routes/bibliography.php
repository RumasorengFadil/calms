<?php

use App\Http\Controllers\Bibliography\AuthorController;
use App\Http\Controllers\Bibliography\BibliographyController;
use App\Http\Controllers\Bibliography\ItemCodePatternController;
use App\Http\Controllers\Bibliography\LanguageController;
use App\Http\Controllers\Bibliography\PlaceController;
use App\Http\Controllers\Bibliography\PublisherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Bibliography Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::prefix("bibliographies")
//     ->middleware(['auth', 'verified'])
//     ->group(function () {
//         Route::get('/', [BibliographyController::class, 'index'])->name('bibliographies.index');

//         Route::get('/create', [BibliographyController::class, 'create'])->name('bibliographies.create');
//         Route::post('/store', [BibliographyController::class, 'store'])->name('bibliographies.store');

//         Route::get('/edit/{biblioId}', [BibliographyController::class, 'edit'])->name('bibliographies.edit');
//         Route::put('/update', [BibliographyController::class, 'update'])->name('bibliographies.update');
//         Route::delete('/destroy/{biblioId}', [BibliographyController::class, 'destroy'])->name('bibliographies.destroy');
//         Route::delete('/destroys', [BibliographyController::class, 'destroys'])->name('bibliographies.destroys');
//     });


Route::middleware(['auth', 'verified'])->group(function () {
    // Biblio Route
    Route::prefix("bibliographies")
        ->group(function () {
            Route::get('/', [BibliographyController::class, 'index'])->name('bibliographies.index');

            Route::get('/create', [BibliographyController::class, 'create'])->name('bibliographies.create');
            Route::post('/store', [BibliographyController::class, 'store'])->name('bibliographies.store');

            Route::get('/edit/{biblioId}', [BibliographyController::class, 'edit'])->name('bibliographies.edit');
            Route::post('/update/{biblioId}', [BibliographyController::class, 'update'])->name('bibliographies.update');
            Route::delete('/destroy/{biblioId}', [BibliographyController::class, 'destroy'])->name('bibliographies.destroy');
            Route::delete('/destroys', [BibliographyController::class, 'destroys'])->name('bibliographies.destroys');
        });

    // Place Route
    Route::prefix('places')->group(function () {
        Route::get('/search', [PlaceController::class, 'search'])->name('places.search');
    });

    // Language Route
    Route::prefix('languages')->group(function () {
        Route::get('/search', [LanguageController::class, 'search'])->name('languages.search');
    });

    // Publisher Route
    Route::prefix('publishers')->group(function () {
        Route::get('/search', [PublisherController::class, 'search'])->name('publishers.search');
    });

    // Mst author Route
    Route::prefix('authors')->group(function () {
        Route::post('/store', [AuthorController::class, 'store'])->name('authors.store');
        Route::get('/search', [AuthorController::class, 'search'])->name('authors.search');
        Route::delete('/destroy/{authorId}', [AuthorController::class, 'destroy'])->name('authors.destroy');
    });

    // Item Code Pattern routes
    Route::prefix('item-code-patterns')->group(function () {
        Route::post('/store', [ItemCodePatternController::class, 'store'])->name('item-code-patterns.store');
    });
});