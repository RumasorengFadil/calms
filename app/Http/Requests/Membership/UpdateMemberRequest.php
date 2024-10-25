<?php

namespace App\Http\Requests\Membership;

use App\Http\Requests\Traits\MemberRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMemberRequest extends FormRequest
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
        $rules['memberPassword'] = 'nullable|string|min:8|required_with:passwordConfirmation';
        $rules['passwordConfirmation'] = 'nullable|string|min:8|same:memberPassword|required_with:memberPassword';
        return $rules;
    }
    public function messages()
    {
        return $this->memberMessages();
    }
}
