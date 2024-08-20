<?php

namespace App\Repositories\Bibliography;

use App\Models\MstPlace;

class PlaceRepository
{
    public function addPlace(array $data): MstPlace
    {
        return MstPlace::create([
            "place_name" => $data["placeName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}