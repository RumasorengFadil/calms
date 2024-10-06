<?php

namespace App\Http\Requests\Bibliography;

use App\Models\Loan;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SearchItemRequest extends FormRequest
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
            'itemCode' => [
                'required',
                'string',
                // Pastikan item_code ada di tabel items
                Rule::exists('items', 'item_code'),

                // Validasi kustom untuk memeriksa apakah sedang dipinjam
                function ($attribute, $value, $fail) {
                    // Cari apakah ada loan untuk item_code ini yang belum dikembalikan
                    $loan = Loan::where('item_code', $value)
                                ->where('is_return', false) // misalnya status dipinjam berdasarkan kolom is_returned
                                ->first();

                    if ($loan) {
                        // Jika item sedang dipinjam, kembalikan error
                        $fail("Item dengan kode $value sedang dipinjam dan belum dikembalikan.");
                    }
                }
            ],
        ];

    }

    public function messages()
    {
        return [
            'itemCode.required' => 'Tidak ada input yang diterima!.',
            'itemCode.exists' => 'Item code tidak ditemukan.',
        ];
    }
}
