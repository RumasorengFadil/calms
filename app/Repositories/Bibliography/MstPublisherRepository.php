<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\MstLanguage;
use App\Models\MstPublisher;

class MstPublisherRepository
{
    public function store(array $data): MstPublisher
    {
        return MstPublisher::create([
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
}