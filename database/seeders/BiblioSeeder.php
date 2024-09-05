<?php

namespace Database\Seeders;

use App\Models\Biblio;
use App\Models\BiblioAuthor;
use App\Models\Item;
use App\Models\MstLanguage;
use App\Models\MstPlace;
use App\Models\MstPublisher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BiblioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Buat data untuk MstLanguage, MstPublisher, dan MstPlace terlebih dahulu
        MstLanguage::factory()->count(5)->create();
        MstPublisher::factory()->count(5)->create();
        MstPlace::factory()->count(5)->create();

        // Buat data untuk Biblio
        Biblio::factory()->count(50)->create()->each(function ($biblio) {
            // Setiap Biblio bisa memiliki beberapa BiblioAuthor dan Item
            BiblioAuthor::factory()->count(3)->create(['biblio_id' => $biblio->biblio_id, 'author_id' => fake()->numberBetween(1, 5)]);
            Item::factory()->count(1)->create([
                'biblio_id' => $biblio->biblio_id,
                "item_code" => fake()->unique()->randomNumber(5),
                "received_date" => now()->toDateString(),
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ]);
        });
    }
}
