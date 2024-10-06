<?php

namespace App\Http\Requests\Circulation;

use Illuminate\Foundation\Http\FormRequest;

class LoanRequest extends FormRequest
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
            'loans' => "required|array|min:1",
            'memberId' => "required",
            'renewed' => "nullable",
            'isLent' => "nullable",
            'isReturn' => "nullable",
            'returnDate' => "nullable",
        ];
    }
    public function messages()
    {
        return [
            'loans.required' => 'Tidak ada buku yang dipinjam.!',
            'memberId.required' => 'MemberID tidak ditemukan.!',
        ];
    }
}
