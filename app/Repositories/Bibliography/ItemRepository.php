<?php

namespace App\Repositories\Bibliography;

use App\Models\Item;

class ItemRepository
{
    public function addItem(array $data): Item
    {
        return Item::create($data);
    }
}