<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MstPlace>
 */
class MstPlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'place_name' => fake()->country(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ];
    }
}
