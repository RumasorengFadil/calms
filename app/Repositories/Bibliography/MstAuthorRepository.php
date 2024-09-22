<?php

namespace App\Repositories\Bibliography;

use App\Models\MstAuthor;
use Illuminate\Database\Eloquent\Collection;

class MstAuthorRepository
{
    public function index()
    {
        return MstAuthor::all();
    }
    public function store(array $data): MstAuthor
    {
        return MstAuthor::firstOrCreate([
            'author_name' => $data['authorName'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ]);
    }

    public function search($searchKey): Collection
    {
        return MstAuthor::where('author_name', 'LIKE', "%{$searchKey}%")
            ->limit(10)
            ->get(['author_id', 'author_name']);
    }
}