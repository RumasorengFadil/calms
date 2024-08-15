<?php

namespace App\Http\Requests\Bibliography;

use Illuminate\Foundation\Http\FormRequest;

class AddBiblioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|unique:members,member_id",
            "edition" => "required",
            "isbnIssn" => "required",
            "publishYear" => "required",
            "collation" => "required",
            "category" => "required",
            "biblioPhoto" => "required|image|mimes:jpg,jpeg,png|max:2048",
            "biblioPhotoPath" => "required",
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Judul harus diisi.!',
            'edition.unique' => 'Edisi sudah terdaftar.!',
            'isbnIssn.required' => 'Isbn/Issn harus diisi!',
            'publishYear.required' => 'Tahun Terbit harus diisi!',
            'collation.required' => 'Kolasi harus diisi!',
            'category.required' => 'Kategori harus diisi!',
            'biblioPhoto.required' => 'Member image harus diisi!',
            'biblioPhoto.image' => 'File harus berupa gambar!',
            'biblioPhoto.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'biblioPhoto.max' => 'Gambar tidak boleh melebihi 2mb!',
            'biblioPhotoPath.required' => 'Path image harus diisi!',
        ];
    }
}
