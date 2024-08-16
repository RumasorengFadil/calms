<?php

namespace App\Repositories\Bibliography;

use App\Models\MstLanguage;

class LanguageRepository
{
    public function addLanguage(array $data): MstLanguage
    {
        return MstLanguage::create($data);
    }
}