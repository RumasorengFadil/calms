<?php

namespace App\Repositories\Bibliography;

use App\Models\Item;

class ItemRepository
{
    public function createItem(array $data): Item
    {
        return Item::create($data);
    }
}