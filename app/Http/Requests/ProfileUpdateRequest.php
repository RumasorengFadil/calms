<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\MemberRules;
use App\Models\User;
use Auth;
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
        if (Auth::guard('member')->user()) {
            $rules = $this->memberRules();
            $rules['memberPassword'] = 'nullable|string|min:8|required_with:passwordConfirmation';
            $rules['passwordConfirmation'] = 'nullable|string|min:8|same:memberPassword|required_with:memberPassword';
            
            return $rules;
        }

        return [
            'username' => ['required', 'string', 'max:255'],
            'realName' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class,'email')->ignore($this->user()->admin_id,'admin_id')],
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'password' => 'nullable|string|min:8|required_with:passwordConfirmation',
            'passwordConfirmation' => 'nullable|string|min:8|same:password|required_with:password',
        ];
        
    }
    public function messages()
    {
        if (Auth::guard('member')->user()) {
            return $this->memberMessages();
        }

        return [
            // 'memberId.required' => 'ID member harus diisi.!',
            'username.required' => 'Username harus diisi!',
            'realName.required' => 'Real name harus diisi!',
            'email.required' => 'Email harus diisi!',
            
            'image.required' => 'Member image harus diisi!',
            'image.image' => 'File harus berupa gambar!',
            'image.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'image.max' => 'Gambar tidak boleh melebihi 2mb!',

            'password.required' => 'Password harus diisi!.',
            'password.required_with' => 'Password harus diisi!.',
            'password.min' => 'Password minimal 8 karakter!',
            'passwordConfirmation.required' => 'Konfirmasi password harus diisi!',
            'passwordConfirmation.required_with' => 'Konfirmasi password harus diisi!',
            'passwordConfirmation.min' => 'Konfirmasi password minimal 8 karakter!',
            'passwordConfirmation.same' => 'Password dan konfirmasi password tidak cocok!.',

        ];
    }
}
