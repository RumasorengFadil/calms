<?php

namespace App\Http\Requests\Traits;

trait MemberMessage
{
    protected function memberRules()
    {
        return [
            "memberId" => "required|unique:members,member_id",
            "memberName" => "required",
            "birthDate" => "required",
            "gender" => "required",
            "memberSinceDate" => "required",
            "registerDate" =>"required",
            "expireDate" => "required",
            "memberPhone" => "required",
            // Aturan validasi lainnya yang umum
        ];
    }

    public function memberMessages()
    {
        return [
            'memberId.required' => 'ID member harus diisi.',
            'memberId.unique' => 'ID member sudah terdaftar.',
            'memberName.required' => 'Nama harus diisi',
            'birthDate.required' => 'Tanggal lahir harus diisi',
            'gender.required' => 'Jenis kelamin harus diisi',
            'memberSinceDate.required' => 'Member sejak kapan harus diisi',
            'registerDate.required' => 'Tanggal daftar harus diisi',
            'expireDate.required' => 'Tanggal expired harus diisi',
            'memberPhone.required' => 'Nomor telepon harus diisi',
        ];
    }
}