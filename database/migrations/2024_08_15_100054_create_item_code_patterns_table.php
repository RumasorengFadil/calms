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
        Schema::create('item_code_patterns', function (Blueprint $table) {
            $table->id("pattern_id");
            $table->string("item_code_pattern")->unique();
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
        Schema::dropIfExists('item_code_patterns');
    }
};
