<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\MstPlace;

class MstPlaceRepository
{
    public function store(array $data): MstPlace
    {
        return MstPlace::create([
            "place_name" => $data["placeName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
    public function update(array $data, $biblioId): MstPlace
    {   
        $mstPlace = Biblio::findOrFail($biblioId)->place()->firstOrFail();

        $mstPlace->update([
            "place_name" => $data["placeName"],
            "last_update" => now()->toDateString(),
        ]);

        return $mstPlace;
    }
}