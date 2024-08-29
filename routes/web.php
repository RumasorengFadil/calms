<?php

use App\Http\Controllers\Membership\MembershipController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function(){
        return Inertia::render('Dashboard');
    })->name('dashboard.index');

    //Bibliography
    // Route::get('/bibliographies', function(){
    //     return Inertia::render('Bibliography/Bibliographies');
    // })->name('bibliographies.index');
    
    // Route::get('/bibliographies/create', function(){
    //     return Inertia::render('Bibliography/CreateBibliography');
    // })->name('bibliographies.create');
    
    // Route::get('/bibliographies/edit', function(){
    //     return Inertia::render('Bibliography/EditBibliography');
    // })->name('bibliographies.edit');

    //Circulation
    Route::get('/circulation', function(){
        return Inertia::render('Circulation/Circulation');
    })->name('circulation.index');
    Route::get('/circulation/loan-history', function(){
        return Inertia::render('Circulation/LoanHistory');
    })->name('circulation.loan-history');
    Route::get('/circulation/due-date-warning', function(){
        return Inertia::render('Circulation/DueDateWarning');
    })->name('circulation.due-date-warning');
    
    //Membership
    Route::get('/membership', function(){
        return Inertia::render('Membership/Memberships');
    })->name('memberships.index');
    Route::get('/membership/create', function(){
        return Inertia::render('Membership/CreateMember');
    })->name('memberships.create');
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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
