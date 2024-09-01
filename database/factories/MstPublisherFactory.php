<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MstPublisher>
 */
class MstPublisherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'publisher_name' => fake()->name(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ];
    }
}
