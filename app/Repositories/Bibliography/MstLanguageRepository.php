<?php

namespace App\Repositories\Bibliography;

use App\Models\MstLanguage;

class MstLanguageRepository
{
    public function create(array $data): MstLanguage
    {
        return MstLanguage::create([
            "language_name" => $data["languageName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}