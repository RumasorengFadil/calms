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
        Route::get('/', [MembershipController::class, 'index'])->name('memberships.index');
        Route::get('/create', [MembershipController::class, 'create'])->name('memberships.create');
        Route::get('/edit', [MembershipController::class, 'edit'])->name('memberships.edit');
        Route::post('/store', [MembershipController::class, 'store'])->name('memberships.store');
        Route::put('/update', [MembershipController::class, 'update'])->name('memberships.update');
        Route::delete('/destroy', [MembershipController::class, 'create'])->name('memberships.create');
    });