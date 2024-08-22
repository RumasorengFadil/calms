<?php

namespace App\Repositories\Bibliography;

use App\Models\BiblioAuthor;
use App\Models\MstAuthor;

class BiblioAuthorRepository
{
    public function assignAuthorToBiblio(array $data): MstAuthor
    {
        return BiblioAuthor::create([
            "biblio_id" => $data["biblioId"],
            "author_id" => $data["authorId"],
        ]);
    }
}