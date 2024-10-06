<?php

use App\Http\Controllers\Circulation\LoanController;
use App\Http\Controllers\Circulation\LoanHistoryController;
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
        Route::get('/', [LoanController::class, 'index'])->name('circulation.index');
        Route::get('/create/{memberId}', [LoanController::class, 'create'])->name('circulation.create');
        Route::post('/store', [LoanController::class, 'store'])->name('circulation.store');
        Route::patch('/update/{loanId}', [LoanController::class, 'update'])->name('circulation.update');
        
        // Route::get('/', [LoanHistoryController::class, 'index'])->name('circulation.loan-history');
        
        Route::get('/loan-history', function () {
            return Inertia::render('Circulation/LoanHistory');
        })->name('circulation.loan-history');
        Route::get('/due-date-warning', function () {
            return Inertia::render('Circulation/DueDateWarning');
        })->name('circulation.due-date-warning');
    });