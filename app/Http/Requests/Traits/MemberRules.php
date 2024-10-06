<?php

namespace App\Http\Requests\Traits;

trait MemberRules
{
    protected function memberRules()
    {
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
            'memberAddress' => '',
            'postalCode' => '',
            'pin' => '',
            'memberEmail' => 'nullable|email',
            'registerDate' =>'',
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