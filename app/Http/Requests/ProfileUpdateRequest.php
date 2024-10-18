<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\MemberRules;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    use MemberRules;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
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
