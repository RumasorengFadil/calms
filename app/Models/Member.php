<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Member extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $primaryKey = 'member_id';
    protected $hidden = [
        'member_password',
        'remember_token',
    ];
    protected $casts = [
        'member_password' => 'hashed',
    ];

    protected $fillable = [
        "member_id",
        "member_name",
        "birth_date",
        "gender",
        "member_since_date",
        "register_date",
        "expire_date",
        "inst_name",
        "member_address",
        "postal_code",
        "member_phone",
        "pin",
        "member_photo",
        "member_email",
        "member_password",
        "last_login",
        "input_date",
        "last_update",
    ];

    public static function addMember($request)
    {
        Member::create([
            "member_id" => $request->memberId,
            "member_name" => $request->memberName,
            "birth_date" => $request->birthDate,
            "gender" => $request->gender,
            "member_since_date" => $request->memberSinceDate,
            "register_date" => $request->registerDate,
            "expire_date" => $request->expireDate,
            "inst_name" => $request->instName,
            "member_address" => $request->memberAddress,
            "postal_code" => $request->postalCode,
            "member_phone" => $request->memberPhone,
            "pin" => $request->pin,
            "member_photo" => $request->memberPhoto,
            "member_photo_path" => $request->memberPhotoPath,
            "member_email" => $request->memberEmail,
            "member_password" => $request->memberPassword,
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
    public static function updateMember($request)
    {
        $member = Member::findOrFail($request->all()->memberId);
        // $member->update($request->all());
        $member->update([
            "member_id" => $request->memberId,
            "member_name" => $request->memberName,
            "birth_date" => $request->birthDate,
            "gender" => $request->gender,
            "member_since_date" => $request->memberSinceDate,
            "register_date" => $request->registerDate,
            "expire_date" => $request->expireDate,
            "inst_name" => $request->instName,
            "member_address" => $request->memberAddress,
            "postal_code" => $request->postalCode,
            "member_phone" => $request->memberPhone,
            "pin" => $request->pin,
            "member_photo" => $request->memberPhoto,
            "member_photo_path" => $request->memberPhotoPath,
            "member_email" => $request->memberEmail,
            "member_password" => $request->memberPassword,
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
    public static function removePhoto($request)
    {
        $member = Member::find($request->only("memberId"));

        if ($member->member_photo_path) {
            Storage::delete("public/members/photo/$member->member_photo_path");
            $member->member_photo_path = null;
            $member->save();
        }
    }
    public static function deleteMember($request)
    {
        Member::find($request->all()->memberId)->delete();

        return [
            "message" => "Member deleted successfully",
            "status" => true
        ];
    }
    public static function searchMember($request)
    {
        return Member::find($request->all()->memberId);
    }
    public static function setStatus($request)
    {
        $member = Member::find($request->all()->memberId);

        $member->is_active = $member->is_active ? false : true;

        $member->save();

        return $member->is_active;
    }
}
