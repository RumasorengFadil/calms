<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;

class BiblioRepository
{
    public function createBiblio(array $data): Biblio
    {
        return Biblio::create([
            'title' => $data['title'],
            'edition' => $data['edition'],
            'isbn_issn' => $data['isbnIssn'],
            'publisher_id' => $data['publisherId'],
            'language_id' => $data['languageId'],
            'publish_place_id' => $data['publishPlaceId'],
            'publish_year' => $data['publishYear'],
            'collation' => $data['collation'],
            'category' => $data['category'],
            'biblio_photo' => $data['biblioPhoto'],
            'biblio_photo_path' => $data['biblioPhotoPath'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ]);
    }
}