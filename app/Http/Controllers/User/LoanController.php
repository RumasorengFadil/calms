<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Loan;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanController extends Controller
{
    public function index()
    {
        $member = Auth::user();
        $member->load("loans.history");
        
        return Inertia::render('Loan/Loan', [
            'member' => $member
        ]);
    }
}
