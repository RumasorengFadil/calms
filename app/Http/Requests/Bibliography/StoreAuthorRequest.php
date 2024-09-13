<?php

namespace App\Http\Requests\Bibliography;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuthorRequest extends FormRequest
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
            'authorName' => 'required|string'
        ];
    }
    public function messages()
    {
        return [
            'authorName.required' => 'Nama penulis harus diisi.!',
            'authorName.string' => 'Nama penulis harus berupa huruf.!',
        ];
    }
}
