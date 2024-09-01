<?php

namespace App\Repositories\Bibliography;

use App\Models\Item;
use App\Services\ItemCodeGenerator;

class ItemRepository
{
    protected $itemCodeGenerator;

    public function __construct(ItemCodeGenerator $itemCodeGenerator)
    {
        $this->itemCodeGenerator = $itemCodeGenerator;
    }
    public function create(array $data)
    {
        $insertData = [];

        for ($i = 0; $i < $data['totalItems']; $i++) {
            $insertData[] = [
                'biblio_id' => $data['biblioId'],
                'item_code' => $this->itemCodeGenerator->generateItemCode($data['itemCodePattern']),
                'received_date' => $data['receivedDate'],
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ];
        }

        Item::insert($insertData);
    }
}