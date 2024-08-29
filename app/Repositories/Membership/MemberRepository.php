<?php

namespace App\Repositories\Membergraphy;

use App\Models\Member;

class MemberRepository
{
    public function createMember(array $data): Member
    {
        return Member::create([
            "title" => $data["title"],
            "edition" => $data["edition"],
            "isbn_issn" => $data["isbnIssn"],
            "publisher_id" => $data["publisherId"],
            "language_id" => $data["languageId"],
            "publish_place_id" => $data["placeId"],
            "expire_date" => $data["expireDate"],
            "inst_name" => $data["instName"],
            "member_address" => $data["memberAddress"],
            "postal_code" => $data["postalCode"],
            "member_phone" => $data["memberPhone"],
            "pin" => $data["pin"],
            "member_photo" => $data["memberPhoto"],
            "member_photo_path" => $data["memberPhotoPath"],
            "member_email" => $data["memberEmail"],
            "member_password" => $data["memberPassword"],
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}