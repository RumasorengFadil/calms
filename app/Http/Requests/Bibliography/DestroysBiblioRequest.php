<?php

namespace App\Http\Requests\Bibliography;

use Illuminate\Foundation\Http\FormRequest;

class DestroysBiblioRequest extends FormRequest
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
            'biblioIds' => 'required|array|min:1',
            'biblioIds.*' => 'exists:biblios,id',
        ];
    }

    public function messages()
    {
        return [
            'biblioIds.required' => 'Biblio belum dipilih.!',
            'biblioIds.*.exists' => 'The selected bibliography ID :input does not exist.',
        ];
    }
}
