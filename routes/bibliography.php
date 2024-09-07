<?php

use App\Http\Controllers\Bibliography\BibliographyController;
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

Route::prefix("bibliographies")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get('/', [BibliographyController::class, 'index'])->name('bibliographies.index');

        Route::get('/create', [BibliographyController::class, 'create'])->name('bibliographies.create');
        Route::post('/store', [BibliographyController::class, 'store'])->name('bibliographies.store');

        Route::get('/edit/{biblioId}', [BibliographyController::class, 'edit'])->name('bibliographies.edit');
        Route::put('/update', [BibliographyController::class, 'update'])->name('bibliographies.update');
        Route::delete('/destroy/{biblioId}', [BibliographyController::class, 'destroy'])->name('bibliographies.destroy');
        Route::delete('/destroys', [BibliographyController::class, 'destroys'])->name('bibliographies.destroys');
    });