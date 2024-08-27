<?php

namespace App\Repositories\Bibliography;

use App\Models\BiblioAuthor;
use App\Models\MstAuthor;

class BiblioAuthorRepository
{
    public function assignAuthorToBiblio(array $data): MstAuthor
    {
        foreach($data["authors"] as $author){
            return BiblioAuthor::create([
                "biblio_id" => $author["biblioId"],
                "author_id" => $author["authorId"],
            ]);
        }
    }
}