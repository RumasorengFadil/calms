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
                    'author_id' => $author['author_id'],
                ];
            }
            BiblioAuthor::insert($insertData);
        });
    }

    public function syncAuthorsWithBiblio(array $data)
    {
        DB::transaction(function () use ($data) {
            $insertData = [];
            // Hapus semua author yang terkait dengan biblio_id
            BiblioAuthor::where('biblio_id', $data['biblioId'])->delete();
            // Persiapkan data untuk diinsert
            // $authorsToInsert = array_map(function ($data) {
            //     return [
            //         'biblio_id' => $data['biblioId'],
            //         'author_id' => $data['authorId'],
            //     ];
            // }, $data['authors'], $biblioId);
            foreach ($data['authors'] as $author) {
                $insertData[] = [
                    'biblio_id' => $data['biblioId'],
                    'author_id' => $author['author_id'],
                ];
            }
            // Insert data author baru
            BiblioAuthor::insert($insertData);
        });
    }
    public function destroy($biblioAuthor)
    {
        $biblioAuthor->delete();
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