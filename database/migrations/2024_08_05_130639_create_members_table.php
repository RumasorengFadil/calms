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
        Schema::create('members', function (Blueprint $table) {
            // $table->integer("member_id")->primary();
            $table->id("member_id");
            $table->string("member_name");
            $table->date("birth_date");
            $table->enum("gender", ["Laki-laki", "Perempuan"]);
            $table->date("member_since_date");
            $table->date("register_date")->nullable();
            $table->date("expire_date");
            $table->boolean("is_active")->default(true);
            $table->string("inst_name")->nullable();
            $table->string("member_address")->nullable();
            $table->string("postal_code")->nullable();
            $table->string("member_phone");
            $table->integer("pin")->nullable();
            $table->string("member_photo_path")->nullable();
            $table->string("member_email")->nullable();
            $table->string("member_password");
            $table->dateTime("last_login");
            $table->date("input_date");
            $table->date("last_update");
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
