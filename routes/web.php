<?php

use App\Http\Controllers\Bibliography\BibliographyController;
use App\Http\Controllers\Bibliography\ItemCodePatternController;
use App\Http\Controllers\Membership\MembershipController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\LoanController;
use App\Http\Controllers\WelcomeController;
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

Route::get('/', [WelcomeController::class, 'index'])->name('index');
Route::get('/bibliographies/{biblioId}', [WelcomeController::class, 'show'])->name('bibliographies.show');


Route::middleware('auth:member')->group(function () {
    Route::get('/loan', [LoanController::class, 'index'])->name('loan.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
});
// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
