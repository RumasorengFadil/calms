<?php

namespace App\Repositories\Membership;

use App\Models\Member;

class MemberRepository
{
    public function index($data)
    {
        return Member::paginate($data);
    }
    public function store(array $data): Member
    {
        return Member::create($this->mapData($data));
    }

    public function update(array $data, $id): bool
    {
        $member = Member::findOrFail($id);
        return $member->update($this->mapData($data));
    }

    public function destroy($member): void
    {
        $member->delete();
    }

    private function mapData(array $data): array
    {
        return [
            "member_id" => $data['memberId'],
            "member_name" => $data['memberName'],
            "birth_date" => $data['birthDate'],
            "gender" => $data['gender'],
            "member_since_date" => $data['memberSinceDate'],
            "register_date" => $data['registerDate'],
            "expire_date" => $data['expireDate'],
            "inst_name" => $data['instName'],
            "member_address" => $data['memberAddress'],
            "postal_code" => $data['postalCode'],
            "member_phone" => $data['memberPhone'],
            "pin" => $data['pin'],
            // "member_photo" => $data['memberPhoto'],
            "member_photo_path" => $data['memberPhotoPath'],
            "member_email" => $data['memberEmail'],
            // "member_password" => bcrypt($data['memberPassword']), // Hash password before storing
            "member_password" => $data['memberPassword'], // Hash password before storing
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ];
    }
}