<?php

namespace App\Repositories\Bibliography;

use App\Models\MstLanguage;
use App\Models\MstPublisher;

class PublisherRepository
{
    public function addPublisher(array $data): MstPublisher
    {
        return MstPublisher::create($data);
    }
}