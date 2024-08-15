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
        Schema::create('items', function (Blueprint $table) {
            $table->id("item_id");

            $table->unsignedBigInteger("biblio_id"); // Foreign key to biblio table
            
            
            $table->foreign("biblio_id") // Defining mst_publisher the foreign key constraint
            ->references("biblio_id")
            ->on("biblio")
            ->onDelete("cascade");

            // Others table
            $table->string("item_code")->unique();
            $table->integer("col_type_id")->nullable();
            $table->date("received_date");
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
        Schema::dropIfExists('items');
    }
};
