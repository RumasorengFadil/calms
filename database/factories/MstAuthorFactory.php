<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MstAuthor>
 */
class MstAuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author_name' => fake()->name(),
            // 'author_year' =>  fake()->year(),
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
        ];
    }
}
