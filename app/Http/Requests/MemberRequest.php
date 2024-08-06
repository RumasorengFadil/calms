<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\MemberRules;
use Illuminate\Foundation\Http\FormRequest;

class MemberRequest extends FormRequest
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
            
            "member_password" => "required|min:8",
        ];
    }

    public function messages()
    {
        return [
            'member_id.required' => 'ID member harus diisi.',
            'member_id.unique' => 'ID member sudah terdaftar.',
        ];
    }
}
