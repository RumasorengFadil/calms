<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\MstPlace;
use Illuminate\Database\Eloquent\Collection;

class MstPlaceRepository
{
    public function store(array $data): MstPlace
    {
        return MstPlace::firstOrCreate([
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
    public function search($searchKey): array| Collection
    {
        return MstPlace::where('place_name', 'LIKE', "%{$searchKey}%")
            ->limit(10)
            ->get(['place_id', 'place_name']);
    }
}