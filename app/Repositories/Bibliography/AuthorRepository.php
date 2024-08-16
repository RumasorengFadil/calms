<?php

namespace App\Repositories\Bibliography;

use App\Models\MstAuthor;

class AuthorRepository
{
    public function addAuthor(array $data): MstAuthor
    {
        return MstAuthor::create($data);
    }
}