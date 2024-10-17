<?php

namespace App\Repositories\Membership;

use App\Models\Member;
use Illuminate\Pagination\LengthAwarePaginator;

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

    public function update(array $data, $member): bool
    {   
        return $member->update($this->mapData($data));
    }
    public function deactivate($member): bool
    {
        return $member->update(["is_active" => !$member['is_active']]);
    }

    public function destroy($member): void
    {
        $member->delete();
    }

    private function mapData(array $data): array
    {
        $mappedData = [
            // "member_id" => $data['memberId'],
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
            // "member_photo_path" => $data['memberPhotoPath'],
            "email" => $data['memberEmail'],
            // "member_password" => bcrypt($data['memberPassword']), // Hash password before storing
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ];
        if (!is_null($data['memberPassword'])) {
            $mappedData["password"] = bcrypt($data['memberPassword']); // Hash password before storing
        }
        if (!is_null($data['memberPhotoPath'])) {
            $mappedData["member_photo_path"] = $data['memberPhotoPath']; // Hash password before storing
        }

        return $mappedData;
    }
    public function search($memberSearchKey): LengthAwarePaginator
    {
        return Member::where('member_name', 'like', "%{$memberSearchKey}%")->orWhere('member_id', $memberSearchKey)->paginate(perPage: 5);
    }
}