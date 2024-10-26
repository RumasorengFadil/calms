<?php

namespace App\Repositories\Profile;

class ProfileRepository
{
    public function update(array $data, $user): bool
    {   
        return $user->update($this->mapData($data));
    }
    private function mapData(array $data): array
    {
        $mappedData = [
            'username' => $data['username'],
            'real_name' => $data['realName'],
            'email' => $data['email'],
            'last_login' => now(),
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ];

        if (!is_null($data['password'])) {
            $mappedData["password"] = bcrypt($data['password']); // Hash password before storing
        }

        if (!is_null($data['pathPhoto'])) {
            $mappedData["image"] = $data['pathPhoto']; // Hash password before storing
        }
        return $mappedData;
    }
}