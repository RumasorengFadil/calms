<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\MstLanguage;
use Illuminate\Database\Eloquent\Collection;

class MstLanguageRepository
{
    public function store(array $data): MstLanguage
    {
        return MstLanguage::firstOrCreate([
            "language_name" => $data["languageName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
    public function update(array $data, $biblioId): MstLanguage
    {
        $mstLanguage = Biblio::findOrFail($biblioId)->language()->firstOrFail();
        $mstLanguage->update([
            'language_name' => $data['languageName'],
            'last_update' => now()->toDateString(),
        ]);
    
        return $mstLanguage;
    }

    public function search($searchKey): array|Collection
    {
        return MstLanguage::where('language_name', 'LIKE', "%{$searchKey}%")
            ->limit(10)
            ->get(['language_id', 'language_name']);
    }
}