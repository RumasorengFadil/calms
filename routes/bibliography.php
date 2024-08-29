<?php

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
        Route::get('/', function () {
            return Inertia::render('Bibliography/Bibliographies');
        })->name('bibliographies.index');

        Route::get('/create', function () {
            return Inertia::render('Bibliography/CreateBibliography');
        })->name('bibliographies.create');

        Route::get('/edit', function () {
            return Inertia::render('Bibliography/EditBibliography');
        })->name('bibliographies.edit');
    });