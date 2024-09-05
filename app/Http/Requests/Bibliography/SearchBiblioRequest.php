<?php

namespace App\Http\Requests\Bibliography;

use Illuminate\Foundation\Http\FormRequest;

class SearchBiblioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'biblioSearchKey' => 'required|string|max:255'
        ];
    }

    public function messages()
    {
        return [
            'biblioSearchKey.required' => 'Tidak ada input yang diterima!.',
            'biblioSearchKey.max' => 'Panjang karakter melebihi 255 karakter!.',
        ];
    }
}
