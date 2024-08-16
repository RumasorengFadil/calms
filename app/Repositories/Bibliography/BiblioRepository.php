<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;

class BiblioRepository
{
    public function addBiblio(array $data): Biblio
    {
        return Biblio::create($data);
    }
}