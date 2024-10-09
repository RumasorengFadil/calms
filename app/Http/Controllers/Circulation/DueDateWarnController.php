<?php

namespace App\Http\Controllers\Circulation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchRequest;
use App\Models\Loan;
use App\Repositories\Circulation\LoanRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DueDateWarnController extends Controller
{
    protected $loanRepository;
    public function __construct(LoanRepository $loanRepository)
    {
        $this->loanRepository = $loanRepository;
    }
    public function index()
    {
        try {
            $loans = Loan::with(['history', 'member'])->paginate(5);
            return Inertia::render('Circulation/DueDateWarning', ['loans' => $loans]);
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

            $loans = $this->loanRepository->search($validatedData['searchKey']);
            return Inertia::render('Circulation/DueDateWarning', [
                'loans' => $loans,
            ]);
        } catch (\Exception $e) {
            // Menyimpan log error
            \Log::error('Failed to search biblios: ' . $e->getMessage());
            // Menyediakan feedback kepada pengguna
            redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'Member'])]);
        }
    }
}
