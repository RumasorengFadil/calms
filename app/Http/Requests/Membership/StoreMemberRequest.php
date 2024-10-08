<?php

namespace App\Http\Requests\Membership;

use App\Http\Requests\Traits\MemberRules;
use Illuminate\Foundation\Http\FormRequest;

class StoreMemberRequest extends FormRequest
{
    use MemberRules;
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
        $rules = $this->memberRules();
        return $rules;
    }

    public function messages()
    {
        $message = $this->memberMessages();
        return $message;
    }
}
