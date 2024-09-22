<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\MstPublisher;
use Illuminate\Database\Eloquent\Collection;

class MstPublisherRepository
{
    public function store(array $data): MstPublisher
    {
        return MstPublisher::firstOrCreate([
            "publisher_name" => $data["publisherName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
    public function update(array $data, $biblioId): MstPublisher
    {

        $mstPublisher = Biblio::findOrFail($biblioId)->publisher()->firstOrFail();

        $mstPublisher->update([
            "publisher_name" => $data["publisherName"],
            "last_update" => now()->toDateString(),
        ]);

        return $mstPublisher;
    }
    public function search($searchKey): array|Collection
    {
        return MstPublisher::where('publisher_name', 'LIKE', "%{$searchKey}%")
            ->limit(10)
            ->get(['publisher_id', 'publisher_name']);
    }
}