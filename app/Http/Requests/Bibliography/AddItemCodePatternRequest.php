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
            "itemCodePattern" => "required|unique:item_code_patterns,item_code_pattern|regex:/^[A-Z]*0+[A-Z]*$/",
        ];
    }

    public function messages()
    {
        return [
            'itemCodePattern.required' => 'Pola code item harus diisi.!',
            'itemCodePattern.regex' => 'Pola salah!. exp : B000/B000B/000B'
        ];
    }
}
