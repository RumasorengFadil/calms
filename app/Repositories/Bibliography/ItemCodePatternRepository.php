<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\ItemCodePattern;
use Illuminate\Pagination\LengthAwarePaginator;

class ItemCodePatternRepository
{

    public function index()
    {
        return ItemCodePattern::all();
    }
    public function store(array $data): ItemCodePattern
    {
        return ItemCodePattern::create([
            'item_code_pattern' => $data['itemCodePattern'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ]);
    }
    public function destroy($ItemCodePattern): void
    {
        $ItemCodePattern->delete();
    }
}