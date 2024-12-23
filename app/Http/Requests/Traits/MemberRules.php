<?php

namespace App\Http\Requests\Traits;

use App\Models\Member;
use Illuminate\Validation\Rule;

trait MemberRules
{
    protected function memberRules()
    {
        $memberId = $this->route('memberId');

        // Jika guard saat ini adalah 'member', ambil member_id dari user
        if (auth()->guard('member')->check()) {
            $memberId = auth()->guard('member')->user()->member_id;
        }

        return [
            // 'memberId' => 'required|unique:members,member_id',
            'memberName' => 'required',
            'birthDate' => 'required',
            'gender' => 'required',
            'memberSinceDate' => 'required',
            'expireDate' => 'required',
            'memberPhone' => 'required',
            'memberPhoto' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            // 'memberPhotoPath' => 'required',
            'memberPassword' => 'required|string|min:8',
            'passwordConfirmation' => 'required|string|min:8|same:memberPassword',
            'instName' => '',
            'memberAddress' => 'nullable',
            'postalCode' => '',
            'pin' => '',
            'memberEmail' => ['required', 'email', 'max:255', Rule::unique(Member::class, 'email')->ignore($memberId, 'member_id')],
            'registerDate' => '',
        ];
    }

    public function memberMessages()
    {
        return [
            // 'memberId.required' => 'ID member harus diisi.!',
            'memberId.unique' => 'ID member sudah terdaftar.!',
            'memberName.required' => 'Nama harus diisi!',
            'birthDate.required' => 'Tanggal lahir harus diisi!',
            'gender.required' => 'Jenis kelamin harus diisi!',
            'registerDate.required' => 'Tanggal daftar harus diisi!',
            'expireDate.required' => 'Tanggal expired harus diisi!',
            'memberEmail.email' => 'Email tidak valid!',
            'memberEmail.required' => 'Email harus diisi!',
            'memberEmail.unique' => 'Email telah digunakan!',
            'memberPhone.required' => 'Nomor telepon harus diisi!',
            'memberPhoto.required' => 'Member image harus diisi!',
            'memberPhoto.image' => 'File harus berupa gambar!',
            'memberPhoto.mimes' => 'Eksitensi yang didukung:jpg,jpeg, dan png',
            'memberPhoto.max' => 'Gambar tidak boleh melebihi 2mb!',
            // 'memberPhotoPath.required' => 'Path image harus diisi!',
            'memberPassword.required' => 'Password harus diisi!.',
            'memberPassword.required_with' => 'Password harus diisi!.',
            'memberPassword.min' => 'Password minimal 8 karakter!',
            'passwordConfirmation.required' => 'Konfirmasi password harus diisi!',
            'passwordConfirmation.required_with' => 'Konfirmasi password harus diisi!',
            'passwordConfirmation.min' => 'Konfirmasi password minimal 8 karakter!',
            'passwordConfirmation.same' => 'Password dan konfirmasi password tidak cocok!.',
        ];
    }
}