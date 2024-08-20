<?php

namespace App\Repositories\Bibliography;

use App\Models\MstAuthor;

class AuthorRepository
{
    public function addAuthor(array $data): MstAuthor
    {
        return MstAuthor::create([
            "author_name" => $data["authorName"],
            "author_year" =>  $data["authorYear"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}