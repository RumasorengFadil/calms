<?php

use App\Http\Controllers\Circulation\DueDateWarnController;
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
        
        // Loan History Route
        Route::prefix('loan-history')->group(function () {
            Route::get('/', [LoanHistoryController::class, 'index'])->name('loan-history.index');
            Route::get('/search', [LoanHistoryController::class, 'search'])->name('loan-history.search');
        });
        
        // Due Date Warning Route
        Route::prefix('/due-date-warning')->group(function () {
            Route::get('/', [DueDateWarnController::class, 'index'])->name('due-date-warning.index');
            Route::get('/search', [DueDateWarnController::class, 'search'])->name('due-date-warning.search');
        });
    });