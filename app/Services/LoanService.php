<?php

namespace App\Services;

use App\Models\Item;
use App\Models\Member;
use App\Repositories\Circulation\LoanHistoryRepository;
use App\Repositories\Circulation\LoanRepository;
use DB;
class LoanService
{
    protected $loanRepository;
    protected $loanHistoryRepository;
    public function __construct(LoanRepository $loanRepository, LoanHistoryRepository $loanHistoryRepository)
    {
        $this->loanRepository = $loanRepository;
        $this->loanHistoryRepository = $loanHistoryRepository;
    }
    public function storeLoan($validatedData)
    {
        DB::transaction(function () use ($validatedData) {
            $loans = $validatedData['loans'];
            $memberId = $validatedData['memberId'];
            
            foreach ($loans as $loan) {
                $itemCode = $loan['item']['item_code'];
                
                $member = Member::find($memberId);
                $biblio = $loan['item']['biblio'];
                $loanData = [
                    'itemCode' => $itemCode,
                    'memberId' => $memberId,
                    'loanDate' => $loan['loanDate'],
                    'dueDate' => $loan['dueDate'],
                    'renewed' => $validatedData['renewed'],
                    'isLent' => $validatedData['isLent'],
                    'isReturn' => $validatedData['isReturn'],
                    'returnDate' => $validatedData['returnDate'],
                ];

                $loan = $this->loanRepository->store($loanData);
                
                $loanHistoryInsertData = [
                    'loanId' => $loan['loan_id'],
                    'itemCode' => $itemCode,
                    'biblioId' => $biblio['biblio_id'],
                    'title' => $biblio['title'],
                    'callNumber' => $biblio['call_number'],
                    'classification' => $biblio['classfication'],
                    'memberId' => $member['member_id'],
                    'memberName' => $member['member_name'],
                    'loanDate' => $loan['loan_date'],
                    'dueDate' => $loan['due_date'],
                ];

                $this->loanHistoryRepository->store($loanHistoryInsertData);
            }
        });
    }
}