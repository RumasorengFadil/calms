<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'name' => fake()->name(),
            // 'email' => fake()->unique()->safeEmail(),
            // 'email_verified_at' => now(),
            // 'password' => static::$password ??= Hash::make('password'),
            // 'remember_token' => Str::random(10),  

            // "username" => fake()->userName(),
            // "real_name" => fake()->userName(),
            // "email" => fake()->unique()->safeEmail(),
            // "password" => Hash::make("password"),
            // "last_login" => now(),
            // "input_date" => now()->toDateString(),
            // "last_update" => now()->toDateString(),
            // 'remember_token' => Str::random(10)

            "username" => 'admin',
            "real_name" => 'Admin',
            "email" => fake()->unique()->safeEmail(),
            "password" => Hash::make("admin"),
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
            'remember_token' => Str::random(10)
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
