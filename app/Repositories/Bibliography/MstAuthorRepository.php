<?php

namespace App\Repositories\Bibliography;

use App\Models\MstAuthor;

class MstAuthorRepository
{
    public function index()
    {
        return MstAuthor::all();
    }
    public function store(array $data): MstAuthor
    {
        return MstAuthor::create([
            'author_name' => $data['authorName'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ]);
    }
    // public function destroy($ItemCodePattern): void
    // {
    //     $ItemCodePattern->delete();
    // }
}