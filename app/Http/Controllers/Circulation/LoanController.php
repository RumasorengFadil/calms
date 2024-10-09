<?php

namespace App\Http\Controllers\Circulation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchItemRequest;
use App\Http\Requests\Bibliography\SearchRequest;
use App\Http\Requests\Circulation\CreateLoanRequest;
use App\Http\Requests\Circulation\LoanRequest;
use App\Http\Requests\Circulation\UpdateLoanRequest;
use App\Models\Loan;
use App\Models\Member;
use App\Repositories\Bibliography\ItemRepository;
use App\Repositories\Circulation\LoanRepository;
use App\Services\LoanService;
use Inertia\Inertia;

class LoanController extends Controller
{
    protected $loanRepository;
    protected $loanService;
    protected $itemRepository;
    public function __construct(LoanRepository $loanRepository, LoanService $loanService, ItemRepository $itemRepository)
    {
        $this->loanRepository = $loanRepository;
        $this->loanService = $loanService;
        $this->itemRepository = $itemRepository;
    }
    public function index()
    {
        try {
            return Inertia::render('Circulation/Circulation');
        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error('Failed to fetch member: ' . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->withErrors(['error' => __('message.error.fetched', ['entity' => 'Biblio'])]);
        }
    }

    public function create($memberId)
    {
        $member = Member::with(['loans.history'])->find($memberId);

        if (!$member) {
            return redirect()->back()->with('error', 'Member ID not found');
        }


        return Inertia::render('Circulation/CreateLoan', ['member' => $member]);
    }

    public function store(LoanRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh LoanRequest
            $validatedData = $request->validated();

            $this->loanService->storeLoan($validatedData);

            return redirect()->route('circulation.index')
                ->with(['message' => __('message.success.stored', ['entity' => 'Loan'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store biblios: ' . $e->getMessage());
            dd($e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Loan'])]);
        }
    }
    public function update(UpdateLoanRequest $request, Loan $loan)
    {
        try {
            // Data sudah tervalidasi oleh UpdateLoanRequest
            $validatedData = $request->validated();


            $loan->load(relations: 'history');

            $this->loanRepository->update($validatedData + [
                'itemCode' => $validatedData['loan']['item_code'],
                'loanDate' => $validatedData['loan']['loan_date'],
                'dueDate' => $validatedData['loan']['due_date'],
            ], $loan);

            return redirect()->back()
                ->with(['message' => __($validatedData['isReturn'] ? 'message.success.returned' : 'message.success.extended', ['entity' => 'Biblio'])]);
        } catch (\Exception $e) {
            \Log::error('Failed to store biblios: ' . $e->getMessage());
            dd($e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.updated', ['entity' => 'Biblio'])]);
        }
    }

    

}
