<?php

namespace Database\Seeders;

use App\Models\ItemCodePattern;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ItemCodePatternSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ItemCodePattern::factory()->count(1)->create();
    }
}
