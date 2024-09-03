<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use App\Models\BiblioAuthor;
use App\Models\MstAuthor;
use DB;

class BiblioAuthorRepository
{
    public function assignAuthorToBiblio(array $data)
    {
        DB::transaction(function () use ($data) {
            $insertData = [];
            foreach ($data['authors'] as $author) {
                $insertData[] = [
                    'biblio_id' => $data['biblioId'],
                    'author_id' => $author['authorId'],
                ];
            }
            BiblioAuthor::insert($insertData);
        });
    }

    public function syncAuthorsWithBiblio(array $data, $biblioId)
    {
        DB::transaction(function () use ($data, $biblioId) {
            // Hapus semua author yang terkait dengan biblio_id
             BiblioAuthor::where('biblio_id', $biblioId)->delete();

            // Persiapkan data untuk diinsert
            $authorsToInsert = array_map(function ($data) {
                return [
                    'biblio_id' => $data['biblioId'],
                    'author_id' => $data['authorId'],
                ];
            }, $data['authors']);

            // Insert data author baru
            BiblioAuthor::insert($authorsToInsert);
        });

    }
}

// $biblio = Biblio::findOrFail($data['biblioId']);
//sync hanya dipakai ketika relasi many to many
// $authorIds = collect($data['authors'])->pluck('authorId')->all();
// $biblio->authors()->sync($authorIds);

// $authors = Biblio::findOrFail($data['biblioId']);

// $authors->authors()->sync

// foreach ($authors as $author) {
//     $author->delete();
// }

// $insertData = [];
// foreach ($data['authors'] as $author) {
//     $insertData[] = [
//         'biblio_id' => $author['biblioId'],
//         'author_id' => $author['authorId'],
//     ];
// }

// BiblioAuthor::insert($insertData);