<?php

namespace App\Http\Requests\Circulation;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLoanRequest extends FormRequest
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
            'loan' => "required",
            'memberId' => "required",
            'isLent' => "nullable",
            'returnDate' => "nullable",
            'renewed' => 'nullable',
            'isReturn' => 'nullable|boolean'
        ];
    }

    public function messages()
    {
        return [
            'renewed.number' => 'Renewed harus berupa angka.!',
            'isReturn.boolean' => 'Return harus berupa boolean.!',
        ];
    }
}
