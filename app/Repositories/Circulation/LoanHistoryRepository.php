<?php

namespace App\Repositories\Circulation;

use App\Models\LoanHistory;

class LoanHistoryRepository
{

    public function index()
    {
        // return Biblio::with(['language', 'publisher', 'place', 'authors', 'items'])->paginate(10);
    }
    public function store(array $data): LoanHistory
    {
        return LoanHistory::create($this->mapData($data));
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'loan_id' => $data['loanId'],
            'item_code' => $data['itemCode'],
            'biblio_id' => $data['biblioId'],
            'title' => $data['title'],
            'call_number' => $data['callNumber'],
            'classification' => $data['classification'],
            'location_name' => null,
            'location_type_name' => null,
            'member_id' => $data['memberId'],
            'member_name' => $data['memberName'],
            'loan_date' => $data['loanDate'],
            'due_date' => $data['dueDate'],
            'renewed' => null,
            'is_lent' => true,
            'is_return' => false,
            'return_date' => null,
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ];

        return $mappedData;
    }
}