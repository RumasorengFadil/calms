<?php

namespace App\Repositories\Circulation;
use App\Models\Loan;
use DB;


class LoanRepository
{

    public function index()
    {
        // return Biblio::with(['language', 'publisher', 'place', 'authors', 'items'])->paginate(10);
    }
    public function store(array $data): Loan
    {
        return Loan::create($this->mapData($data));
    }
    public function update(array $data, Loan $loan)
    {
        DB::transaction(function () use ($data, $loan) {
            $loan->update($this->mapData($data));
            $loan['history']->update($this->mapData($data));
        });
    }
    private function mapData(array $data): array
    {
        //Logika untuk meminjam buku
        $mappedData = [
            'item_code' => $data['itemCode'],
            'member_id' => $data['memberId'],
            'loan_date' => $data['loanDate'],
            'due_date' => $data['dueDate'],
            'renewed' => $data['renewed'],
            'is_lent' => $data['isLent'],
            'is_return' => $data['isReturn'],
            'return_date' => $data['returnDate'],
        ];

        // //Logika untuk pengembalian buku
        // if (isset($data['isReturn'])) {
        //     $mappedData = ['is_return' => $data['isReturn']];
        // }

        // //Logika untuk perpanjangan buku
        // if (isset($data['renewed'])) {
        //     $mappedData = ['renewed' => $data['renewed']];
        // }

        $mappedData['last_update'] = now()->toDateString();

        return $mappedData;
    }
}