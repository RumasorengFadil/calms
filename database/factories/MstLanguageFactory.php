<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MstLanguage>
 */
class MstLanguageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'language_name' => fake()->languageCode,
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ];
    }
}
