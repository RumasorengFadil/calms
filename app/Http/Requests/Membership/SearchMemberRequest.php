<?php

namespace App\Http\Requests\Membership;

use App\Http\Requests\Traits\MemberRules;
use Illuminate\Foundation\Http\FormRequest;

class SearchMemberRequest extends FormRequest
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
        $rules = $this->memberRules();
        return [
            "memberId" => "required",
        ];
    }

    public function messages()
    {
        return $this->memberMessages();
        // return [
        //     'memberId.required' => 'ID member tidak ditemukan.',
        // ];
    }
}