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
            'selectedBiblioIds' => 'required|array|min:1',
            'selectedBiblioIds.*' => 'exists:biblios,biblio_id',
        ];
    }

    public function messages()
    {
        return [
            'selectedBiblioIds.required' => 'Biblio belum dipilih.!',
            'selectedBiblioIds.*.exists' => 'The selected bibliography ID :input does not exist.',
        ];
    }
}
