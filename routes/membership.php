<?php

use App\Http\Controllers\Membership\MembershipController;
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

Route::prefix("membership")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get('/', [MembershipController::class, 'index'])->name('membership.index');
        Route::get('/create', [MembershipController::class, 'create'])->name('membership.create');
        Route::get('/search', [MembershipController::class, 'search'])->name('membership.search');
        Route::get('/edit', [MembershipController::class, 'edit'])->name('membership.edit');
        Route::post('/store', [MembershipController::class, 'store'])->name('membership.store');
        Route::put('/update', [MembershipController::class, 'update'])->name('membership.update');
        Route::delete('/destroy/{memberId}', [MembershipController::class, 'destroy'])->name('membership.destroy');
        Route::delete('/destroy', [MembershipController::class, 'destroys'])->name('membership.destroys');
    });