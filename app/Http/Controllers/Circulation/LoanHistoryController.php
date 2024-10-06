<?php

namespace App\Http\Controllers\Circulation;

use App\Http\Controllers\Controller;
use App\Models\LoanHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanHistoryController extends Controller
{
    public function index()
    {
        try {
            $histories = LoanHistory::paginate(10);
            
            return Inertia::render('Circulation/LoanHistory', ['histories', $histories]);
        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Failed to fetch member: ' . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->withErrors(['error' => __('message.error.fetched', ['entity' => 'Biblio'])]);
        }
    }
}
