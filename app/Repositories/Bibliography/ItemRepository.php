<?php

namespace App\Repositories\Bibliography;

use App\Models\Item;
use App\Services\ItemCodeGenerator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class ItemRepository
{
    protected $itemCodeGenerator;

    public function __construct(ItemCodeGenerator $itemCodeGenerator)
    {
        $this->itemCodeGenerator = $itemCodeGenerator;
    }
    public function store(array $data)
    {
        // $insertData = [];

        for ($i = 0; $i < $data['totalItems']; $i++) {
            Item::create([
                'biblio_id' => $data['biblioId'],
                'item_code' => $this->itemCodeGenerator->generateItemCode($data['itemCodePattern']),
                // 'received_date' => $data['receivedDate'],
                'received_date' => now()->toDateString(),
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ]);
        }

        // for ($i = 0; $i < $data['totalItems']; $i++) {
        //     $insertData[] = [
        //         'biblio_id' => $data['biblioId'],
        //         'item_code' => $this->itemCodeGenerator->generateItemCode($data['itemCodePattern']),
        //         // 'received_date' => $data['receivedDate'],
        //         'received_date' => now()->toDateString(),
        //         'input_date' => now()->toDateString(),
        //         'last_update' => now()->toDateString(),
        //     ];
        // }

        // Item::insert($insertData);
    }

    public function search($searchKey)
    {
        return Item::where('item_code',$searchKey)->with(['biblio'])->first();
    }
}