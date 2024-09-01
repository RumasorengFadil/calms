<?php

namespace Database\Factories;

use App\Models\MstLanguage;
use App\Models\MstPlace;
use App\Models\MstPublisher;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Biblio>
 */
class BiblioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence,
            'edition' => fake()->randomNumber(1),
            'isbn_issn' => fake()->isbn10(),
            'publish_year' => fake()->year(),
            'collation' => fake()->word(),
            'category' => fake()->word(),
            'biblio_photo' => "empty",
            'biblio_photo_path' => "empty",
            'input_date' => now()->toDateString(),
            'last_update' => now()->toDateString(),
            'publisher_id' => MstPublisher::factory(),
            'language_id' => MstLanguage::factory(),
            'publish_place_id' => MstPlace::factory(),
        ];
    
    }
}
