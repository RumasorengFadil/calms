<?php

namespace App\Repositories;

use App\Models\Biblio;

class BiblioRepository
{
    public function addBiblio(array $data): Biblio
    {
        return Biblio::create($data);
    }
}