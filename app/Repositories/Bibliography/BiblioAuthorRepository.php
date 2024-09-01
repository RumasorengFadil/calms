<?php

namespace App\Repositories\Bibliography;

use App\Models\BiblioAuthor;
use App\Models\MstAuthor;

class BiblioAuthorRepository
{
    public function assignAuthorToBiblio(array $data)
    {
        $insertData = [];
        foreach ($data["authors"] as $author) {
            $insertData[] = [
                "biblio_id" => $author["biblioId"],
                "author_id" => $author["authorId"],
            ];
        }

        BiblioAuthor::insert($insertData);
    }
}