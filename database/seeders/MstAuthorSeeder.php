<?php

namespace Database\Seeders;

use App\Models\MstAuthor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MstAuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MstAuthor::factory()->count(5)->create();
    }
}
