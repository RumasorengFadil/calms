<?php

namespace Database\Seeders;

use App\Models\Biblio;
use App\Models\BiblioAuthor;
use App\Models\Item;
use App\Models\MstLanguage;
use App\Models\MstPlace;
use App\Models\MstPublisher;
use App\Services\ItemCodeGenerator;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BiblioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    protected $itemCodeGenerator;

    public function __construct(ItemCodeGenerator $itemCodeGenerator)
    {
        $this->itemCodeGenerator = $itemCodeGenerator;
    }

    public function run(): void
    {

        $biblios = [
            [
                'title' => 'PostgreSQL : a comprehensive guide to building, programming, and administering PostgreSQL databases',
                'edition' => '1st ed.',
                'isbn_issn' => '0735712573',
                'publish_year' => '2003',
                'collation' => 'xvii, 790 p. : ill. ; 23cm.',
                'category' => 'database',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "postgresql.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Ajax : creating Web pages with asynchronous JavaScript and XML',
                'edition' => '1st ed.',
                'isbn_issn' => '9780132272674',
                'publish_year' => '2007',
                'collation' => 'xxii, 384 p. : ill. ; 24 cm.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "ajax.jpg",
                'itemCodePattern' => "A00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Web application architecture : principles, protocols, and practices',
                'edition' => '1st ed.',
                'isbn_issn' => '0471486566',
                'publish_year' => '2003',
                'collation' => 'xi, 357 p. : ill. ; 23 cm.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "webapp_arch.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Information Architecture for the World Wide Web: Designing Large-Scale Web Sites',
                'edition' => '2st ed.',
                'isbn_issn' => '9780596000356',
                'publish_year' => '2002',
                'collation' => '500p.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "information_arch.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Producing open source software : how to run a successful free software project',
                'edition' => '1st ed.',
                'isbn_issn' => '9780596007591',
                'publish_year' => '2005',
                'collation' => 'xx, 279 p. ; 24 cm.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Library and Information Center Management',
                'edition' => '7th ed.',
                'isbn_issn' => '9781591584063',
                'publish_year' => '2007',
                'collation' => 'xxviii, 492 p. : ill. ; 27 cm.',
                'category' => 'Management',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'The organization of information',
                'edition' => '2nd ed.',
                'isbn_issn' => '1563089769',
                'publish_year' => '2004',
                'collation' => 'xxvii, 417 p. : ill. ; 27 cm.',
                'category' => 'Management',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'PHP 5 for dummies',
                'edition' => '2nd ed.',
                'isbn_issn' => '0764541668',
                'publish_year' => '2004',
                'collation' => 'xiv, 392 p. : ill. ; 24 cm.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'The Definitive Guide to MySQL 5',
                'edition' => '2nd ed.',
                'isbn_issn' => '9781590595350',
                'publish_year' => '2005',
                'collation' => '005.75/85-22 Kof d',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Linux In a Nutshell',
                'edition' => 'Fifth Edition',
                'isbn_issn' => '9780596009304',
                'publish_year' => '2005',
                'collation' => 'xiv, 925 p. : ill. ; 23 cm.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],
            [
                'title' => 'Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary',
                'edition' => 'Fifth Edition',
                'isbn_issn' => '0-596-00108-8',
                'publish_year' => '2001',
                'collation' => '208p.',
                'category' => 'Programming',
                'biblio_photo' => "",
                'biblio_photo_path' => "",
                // 'biblio_photo_path' => "producing_oss.jpg",
                'itemCodePattern' => "B00000",
                'input_date' => now()->toDateString(),
                'last_update' => now()->toDateString(),
            ],

        ];

        DB::transaction(function () use ($biblios) {

            foreach ($biblios as $biblio) {
                $createdPublisher = MstPublisher::factory()->count(1)->create()->first();
                $createdLanguage = MstLanguage::factory()->count(1)->create()->first();
                $createdPlace = MstPlace::factory()->count(1)->create()->first();


                $biblio = Biblio::create($biblio + [
                    'publisher_id' => $createdPublisher->publisher_id,
                    'language_id' => $createdLanguage->language_id,
                    'publish_place_id' => $createdPlace->place_id
                ]);

                BiblioAuthor::factory()->count(1)->create(['biblio_id' => $biblio->biblio_id, 'author_id' => fake()->numberBetween(1, 5)])->first();

                Item::factory()->count(1)->create([
                    'biblio_id' => $biblio->biblio_id,
                    "item_code" => $this->itemCodeGenerator->generateItemCode($biblio->itemCodePattern),
                    "received_date" => now()->toDateString(),
                    'input_date' => now()->toDateString(),
                    'last_update' => now()->toDateString(),
                ]);
            }
        });
        
        // Buat data untuk MstLanguage, MstPublisher, dan MstPlace terlebih dahulu
        // MstLanguage::factory()->count(5)->create();
        // MstPublisher::factory()->count(5)->create();
        // MstPlace::factory()->count(5)->create();

        // Buat data untuk Biblio
        // Biblio::factory()->count(0)->create()->each(function ($biblio) {
        //     // Setiap Biblio bisa memiliki beberapa BiblioAuthor dan Item
        //     BiblioAuthor::factory()->count(1)->create(['biblio_id' => $biblio->biblio_id, 'author_id' => fake()->numberBetween(1, 5)]);
        //     Item::factory()->count(1)->create([
        //         'biblio_id' => $biblio->biblio_id,
        //         "item_code" => $this->itemCodeGenerator->generateItemCode($biblio->itemCodePattern),
        //         "received_date" => now()->toDateString(),
        //         'input_date' => now()->toDateString(),
        //         'last_update' => now()->toDateString(),
        //     ]);
        // });
    }
}
