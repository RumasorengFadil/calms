<?php

namespace App\Repositories\Bibliography;

use App\Models\MstLanguage;

class LanguageRepository
{
    public function addLanguage(array $data): MstLanguage
    {
        return MstLanguage::create([
            "language_name" => $data["languageName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}