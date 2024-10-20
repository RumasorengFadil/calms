<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ItemCodePattern>
 */
class ItemCodePatternFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "item_code_pattern" => "B00000",
            "input_date" => fake()->date(),
            "last_update" => fake()->date(),
        ];
    }
}
