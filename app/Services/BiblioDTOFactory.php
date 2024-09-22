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
                'isbnIssn' => $data['isbnIssn'],
                // 'publisher_id' => $data['publisherId'],
                // 'language_id' => $data['languageId'],
                // 'publish_place_id' => $data['publishPlaceId'],
                'publishYear' => $data['publishYear'],
                'collation' => $data['collation'],
                'category' => $data['category'],
                'biblioPhoto' => $data['biblioPhoto'],
                'biblioPhotoPath' => $data['biblioPhotoPath'],
                'abstract' => $data['abstract'],
                'itemCodePattern' => $data['itemCodePattern'],
            ],
            [
                'itemCodePattern' => $data['itemCodePattern'],
                'totalItems' => $data['totalItems']
            ]
        );
    }
}