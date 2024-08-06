<?php

namespace App\Http\Requests\Traits;

trait MemberRules
{
    protected function memberRules()
    {
        return [
            "member_id" => "required|unique:members,member_id",
            "member_name" => "required",
            "birth_date" => "required",
            "gender" => "required",
            "member_since_date" => "required",
            "register_date" =>"required",
            "expire_date" => "required",
            "member_phone" => "required",
            // Aturan validasi lainnya yang umum
        ];
    }
}