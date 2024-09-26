<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        "member_id" => fake()->unique()->randomNumber(5),
        "member_name" => fake()->name(),
        "birth_date" => fake()->date(),
        "gender" => fake()->randomElement(["Laki-laki", "Perempuan"]),
        "member_since_date" => fake()->date(),
        "register_date" => fake()->date(),
        "expire_date" => fake()->date(),
        "inst_name" => "Institut Teknologi Telkom Purwokerto",
        "member_address" => fake()->address(),
        "postal_code" => fake()->postcode(),
        "member_phone" => fake()->phoneNumber(),
        "pin" => "123",
        // "member_photo" => fake()->image("public/fake/images", 640, 480, null, false),
        "member_photo_path" => fake()->url(),
        "member_email" => fake()->email(),
        "member_password" => fake()->password(),
        "last_login" => fake() -> dateTime(),
        "input_date" => fake()->date(),
        "last_update" => fake()->date(),
        'remember_token' => Str::random(10)
        ];
    }
}
