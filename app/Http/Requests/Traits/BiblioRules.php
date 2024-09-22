<?php

namespace App\Http\Requests\Traits;

trait BiblioRules
{
    protected function biblioRules()
    {
        return [
            "title" => "required|unique:members,member_id",
            "edition" => "required",
            "isbnIssn" => "required",
            "publisherName" => "required",
            "publishYear" => "required",
            "collation" => "required",
            "abstract" => "string",
            "category" => "required",
            "placeName" => "required",
            "languageName" => "required",
            "totalItems" => "",
            "biblioPhoto" => "nullable|mimes:jpg,jpeg,png|max:2048",
            "biblioPhotoPath" => "",
            "itemCodePattern" => "required",
            'authors' => 'required|array',
            'authors.*.author_id' => 'required|integer|exists:mst_authors,author_id',
            'authors.*.author_name' => 'required|string',
        ];
    }

    public function biblioMessages()
    {
        return [
            'title.required' => 'Judul harus diisi.!',
            'edition.unique' => 'Edisi sudah terdaftar.!',
            'isbnIssn.required' => 'Isbn/Issn harus diisi!',
            'publisherName.required' => 'Penerbit harus diisi!',
            'publishYear.required' => 'Tahun Terbit harus diisi!',
            'collation.required' => 'Kolasi harus diisi!',
            'category.required' => 'Kategori harus diisi!',
            // 'biblioPhoto.required' => 'Gambar buku harus diisi!',
            'biblioPhoto.image' => 'File harus berupa gambar!',
            'biblioPhoto.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'biblioPhoto.max' => 'Gambar tidak boleh melebihi 2mb!',
            'biblioPhotoPath.required' => 'Path image harus diisi!',
            'itemCodePattern.required' => 'Item code pattern harus diisi!',
            'authors' => 'Penulis buku harus diisi.!',
            'authors.*.author_id' => 'Penulis belum terdaftar.!',
            'placeName.required' => 'Tempat terbit harus diisi!',
            'languageName.required' => 'Bahasa harus diisi!',
        ];
    }
}