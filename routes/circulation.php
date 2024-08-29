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

Route::prefix("circulation")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get('/', function () {
            return Inertia::render('Circulation/Circulation');
        })->name('circulation.index');
        Route::get('/loan-history', function () {
            return Inertia::render('Circulation/LoanHistory');
        })->name('circulation.loan-history');
        Route::get('/due-date-warning', function () {
            return Inertia::render('Circulation/DueDateWarning');
        })->name('circulation.due-date-warning');
    });