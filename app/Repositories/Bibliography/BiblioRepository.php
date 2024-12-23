<?php

namespace App\Repositories\Bibliography;

use App\Models\Biblio;
use Cache;
use Illuminate\Pagination\LengthAwarePaginator;

class BiblioRepository
{

    public function index()
    {
        return Biblio::with(['language', 'publisher', 'place', 'authors', 'items'])->paginate(10);
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
    public function search($biblioSearchKey) : LengthAwarePaginator
    {
        return Biblio::with(['language', 'publisher', 'place', 'authors', 'items'])->where('title', 'like', "%{$biblioSearchKey}%")->orWhere('biblio_id', $biblioSearchKey)->paginate(10)->appends(['keyword' => $biblioSearchKey]);
    }
    public function getLatestBooks(int $limit = 10)
    {
        return Cache::remember('latest_books', 60, function () use ($limit) {
            // Query untuk mengambil buku terbaru
            return Biblio::orderBy('created_at', 'desc')
                ->take($limit)
                ->get();
        });
    }
    public function getFavoriteBooks(int $limit = 10)
    {
        // $biblio = Biblio::withCount('loansHistory')->orderBy('loans_history_count','desc')->limit(10)->get();
        // dd($biblio);
        
        // Query untuk mengambil buku dengan peminjaman terbanyak
        return Cache::remember('favorite_books', 60, function () use ($limit) {
            return Biblio::withCount('loansHistory')
                ->orderBy('loans_history_count', 'desc')
                ->take($limit)
                ->get();
        });
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'title' => $data['title'],
            'edition' => $data['edition'],
            'isbn_issn' => $data['isbnIssn'],
            'publisher_id' => $data['publisherId'],
            'language_id' => $data['languageId'],
            'publish_place_id' => $data['publishPlaceId'],
            'publish_year' => $data['publishYear'],
            'collation' => $data['collation'],
            'category' => $data['category'],
            'abstract' => $data['abstract'],
            'itemCodePattern' => $data['itemCodePattern'],
            'biblio_photo' => $data['biblioPhoto'],
            // 'biblio_photo_path' => $data['biblioPhotoPath'],
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ];
        if (!is_null($data['biblioPhotoPath'])) {
            $mappedData["biblio_photo_path"] = $data['biblioPhotoPath']; // Hash password before storing
        }
        return $mappedData;
    }
}