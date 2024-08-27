<?php

namespace App\Http\Requests\Bibliography;

use Illuminate\Foundation\Http\FormRequest;

class AddAuthorRequest extends FormRequest
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
            'authors' => 'required|array',
            'authors.*.id' => 'required|integer|exists:authors,id',
            'authors.*.name' => 'required|string',
        ];
    }
    public function messages()
    {
        return [
            'authorName.required' => 'Nama penulis item harus diisi.!',
        ];
    }
}
