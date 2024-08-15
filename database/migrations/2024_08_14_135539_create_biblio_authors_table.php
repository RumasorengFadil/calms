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
        Schema::create('biblio_authors', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger("biblio_id"); // Foreign key to biblio table
            
            
            $table->foreign("biblio_id") // Defining mst_publisher the foreign key constraint
            ->references("biblio_id")
            ->on("biblio")
            ->onDelete("cascade");

            $table->unsignedBigInteger("author_id"); // Foreign key to mst_author table
            
            
            $table->foreign("author_id") // Defining mst_publisher the foreign key constraint
            ->references("author_id")
            ->on("mst_author")
            ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biblio_authors');
    }
};