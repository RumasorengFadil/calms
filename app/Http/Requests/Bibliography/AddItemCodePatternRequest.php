<?php

namespace App\Http\Requests\Bibliography;

use Illuminate\Foundation\Http\FormRequest;

class AddItemCodePatternRequest extends FormRequest
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
            "patternName" => "required|unique:item_code_patterns,pattern_name" 
        ];
    }

    public function messages()
    {
        return [
            'patternName.required' => 'Pola code item harus diisi.!',
        ];
    }
}
