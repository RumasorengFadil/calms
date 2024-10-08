<?php

namespace App\Http\Controllers\Circulation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchRequest;
use App\Models\LoanHistory;
use App\Repositories\Circulation\LoanHistoryRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanHistoryController extends Controller
{
    protected $loanHistoryRepository;

    public function __construct(LoanHistoryRepository $loanHistoryRepository)
    {
        $this->loanHistoryRepository = $loanHistoryRepository;
    }
    public function index()
    {
        try {
            $histories = LoanHistory::with(['member'])->paginate(10);
            return Inertia::render('Circulation/LoanHistory', ['histories' => $histories]);
        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Failed to fetch member: ' . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->withErrors(['error' => __('message.error.fetched', ['entity' => 'Biblio'])]);
        }
    }

    public function search(SearchRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh SearchBiblioRequest
            $validatedData = $request->validated();

            $histories = $this->loanHistoryRepository->search($validatedData['searchKey']);
            
            return Inertia::render('Circulation/LoanHistory', [
                'histories' => $histories,
            ]);
        } catch (\Exception $e) {
            // Menyimpan log error
            \Log::error('Failed to search biblios: ' . $e->getMessage());
            // Menyediakan feedback kepada pengguna
            redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'Member'])]);
        }
    }
}
