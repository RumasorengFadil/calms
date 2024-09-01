<?php

namespace App\Repositories\Bibliography;

use App\Models\MstAuthor;

class MstAuthorRepository
{
    public function createAuthor(array $data): MstAuthor
    {
        return MstAuthor::create([
            'author_name' => $data['authorName'],
            'author_year' =>  $data['authorYear'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ]);
    }
}