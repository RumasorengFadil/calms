<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
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
    public function update(array $data, $biblioId): MstLanguage
    {

        $mstLanguage = Biblio::findOrFail($biblioId);
    
        $mstLanguage->update([
            'language_name' => $data['languageName'],
            'last_update' => now()->toDateString(),
        ]);
    
        return $mstLanguage;
    }
}