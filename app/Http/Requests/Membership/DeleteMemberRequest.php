<?php

namespace App\Http\Requests\Membership;

use App\Http\Requests\Traits\MemberRules;
use Illuminate\Foundation\Http\FormRequest;

class DeleteMemberRequest extends FormRequest
{
    use MemberRules;
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
            "memberId" => "required|unique:members,member_id"
        ];
        // return [
        //     "memberId" => "required|unique:members,member_id"
        // ];
    }

    public function messages()
    {
        return $this->memberMessages();
        // return [
        //     'memberId.required' => 'ID member tidak ditemukan.',
        // ];
    }
}
