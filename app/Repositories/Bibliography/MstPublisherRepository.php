<?php

namespace App\Repositories\Bibliography;

use App\Models\MstLanguage;
use App\Models\MstPublisher;

class MstPublisherRepository
{
    public function create(array $data): MstPublisher
    {
        return MstPublisher::create([
            "publisher_name" => $data["publisherName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}