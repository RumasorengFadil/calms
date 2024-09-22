<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('biblios', function (Blueprint $table) {
            $table->id("biblio_id"); // Primary key with the name 'biblio_id'
            $table->string("title");
            $table->string("edition");
            $table->string("isbn_issn");
            
            $table->unsignedBigInteger("publisher_id"); // Foreign key to mst_publisher table
            
            
            $table->foreign("publisher_id") // Defining mst_publisher the foreign key constraint
            ->references("publisher_id")
            ->on("mst_publishers")
            ->onDelete("cascade");
            
            $table->unsignedBigInteger("language_id"); // Foreign key to mst_language table
            
            $table->foreign("language_id") // Defining mst_language the foreign key constraint
            ->references("language_id")
            ->on("mst_languages")
            ->onDelete("cascade");
   
            $table->unsignedBigInteger("publish_place_id"); // Foreign key to mst_place table
            
            $table->foreign("publish_place_id") // Defining mst_place the foreign key constraint
            ->references("place_id")
            ->on("mst_places")
            ->onDelete("cascade");
            
            // Others columns
            $table->integer("publish_year");
            $table->string("collation");
            $table->string("series_title")->nullable();
            $table->integer("call_number")->nullable();
            $table->string("classfication")->nullable();
            $table->string("category");
            $table->text("abstract")->nullable();
            $table->text("itemCodePattern");
            $table->string("biblio_photo")->nullable();
            $table->string("biblio_photo_path")->nullable();
            $table->string("spec_detail_info")->nullable();
            $table->date("input_date");
            $table->date("last_update");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biblios');
    }
};
