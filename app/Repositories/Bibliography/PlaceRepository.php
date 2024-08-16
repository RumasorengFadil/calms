<?php

namespace App\Repositories\Bibliography;

use App\Models\MstPlace;

class PlaceRepository
{
    public function addPlace(array $data): MstPlace
    {
        return MstPlace::create($data);
    }
}