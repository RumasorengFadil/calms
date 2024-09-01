<?php

namespace App\Repositories\Bibliography;

use App\Models\MstPlace;

class MstPlaceRepository
{
    public function create(array $data): MstPlace
    {
        return MstPlace::create([
            "place_name" => $data["placeName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}