<?php
namespace App\Services;

use App\DTOs\BiblioDTO;

class BiblioDTOFactory
{
    /**
     * Create a BiblioDTO instance from the given data.
     *
     * @param array $data
     * @return BiblioDTO
     */
    public function create(array $data): BiblioDTO
    {
        return new BiblioDTO(
            [
                'authors' => $data['authors'],
            ],
            [
                'languageName' => $data['languageName']
            ],
            [
                'publisherName' => $data['publisherName']
            ],
            [
                'placeName' => $data['placeName']
            ],
            [
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
            ],
            [
                'itemCodePattern' => $data['itemCodePattern'],
                'totalItems' => $data['totalItems']
            ]
        );
    }
}