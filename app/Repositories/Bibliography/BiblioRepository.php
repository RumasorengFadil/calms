<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;

class BiblioRepository
{

    public function index($data)
    {
        return Biblio::with(['language', 'publisher', 'place', 'authors', 'items'])->paginate($data);
    }
    public function store(array $data): Biblio
    {
        return Biblio::create($this->mapData($data));
    }
    public function update(array $data, $id): Biblio
    {
        $biblio = Biblio::findOrFail($id);
        $biblio->update($this->mapData($data));

        return $biblio;
    }
    public function destroy($biblio): void
    {
        $biblio->delete();
    }
    public function search($biblioSearchKey)
    {
        return Biblio::with(['language', 'publisher', 'place', 'authors', 'items'])->where('title', 'like', "%{$biblioSearchKey}%")->paginate(5);
    }

    private function mapData(array $data): array
    {
        return [
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
        ];
    }
}