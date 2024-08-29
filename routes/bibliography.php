<?php

use App\Http\Controllers\Membership\MembershipController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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

Route::middleware(['auth', 'verified'])->group(function(){
    //Bibliography
    Route::get('/bibliographies', function(){
        return Inertia::render('Bibliography/Bibliographies');
    })->name('bibliographies.index');
    
    Route::get('/bibliographies/create', function(){
        return Inertia::render('Bibliography/CreateBibliography');
    })->name('bibliographies.create');
    
    Route::get('/bibliographies/edit', function(){
        return Inertia::render('Bibliography/EditBibliography');
    })->name('bibliographies.edit');

    // Route::get('/circulation/loan-history', function(){
    //     return Inertia::render('Circulation/LoanHistory');
    // })->name('circulation.loan-history');
    // Route::get('/circulation/due-date-warning', function(){
    //     return Inertia::render('Circulation/DueDateWarning');
    // })->name('circulation.due-date-warning');

    // Route::get('/bibliographies/{id}/edit', function($id){
    //     return Inertia::render('Bibliography/EditBibliography', ['id' => $id]);
    // })->name('bibliographies.edit');
});