<?php

namespace App\Http\Requests\Circulation;

use Illuminate\Foundation\Http\FormRequest;

class CreateLoanRequest extends FormRequest
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
            'memberId' => "required|exists:members,member_id",
        ];
    }
    public function messages()
    {
        return [
            'memberId.required' => 'ID Anggota harus diisi.!',
            'memberId.exists' => 'ID tidak ditemukan.!',
        ];
    }
}
