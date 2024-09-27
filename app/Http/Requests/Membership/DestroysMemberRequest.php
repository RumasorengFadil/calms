<?php

namespace App\Http\Requests\Membership;

use Illuminate\Foundation\Http\FormRequest;

class DestroysMemberRequest extends FormRequest
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
            'selectedMemberIds' => 'required|array|min:1',
            'selectedMemberIds.*' => 'exists:members,member_id',
        ];
    }

    public function messages()
    {
        return [
            'selectedMemberIds.required' => 'Member belum dipilih.!',
            'selectedMemberIds.*.exists' => 'The selected Memberships ID :input does not exist.',
        ];
    }
}
