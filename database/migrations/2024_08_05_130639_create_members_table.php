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
            $table->id("member_id");
            $table->string("member_name");
            $table->date("birth_date");
            $table->enum("gender", ["pria", "winita"]);
            $table->date("member_since_date");
            $table->date("register_date");
            $table->date("expire_date");
            $table->string("inst_name");
            $table->string("member_address");
            $table->integer("postal_code");
            $table->string("member_phone");
            $table->integer("pin");
            $table->string("member_photo");
            $table->string("member_email");
            $table->string("member_password");
            $table->date("last_login");
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
        Schema::dropIfExists('members');
    }
};
