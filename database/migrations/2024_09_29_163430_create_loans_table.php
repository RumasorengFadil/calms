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
        Schema::create('loans', function (Blueprint $table) {
            $table->id('loan_id');
            $table->string('item_code');

            $table->unsignedBigInteger('member_id'); // Foreign key to members table
            
            
            $table->foreign('member_id') // Defining members the foreign key constraint
            ->references('member_id')
            ->on('members')
            ->onDelete('cascade');

            $table->date('loan_date');
            $table->date('due_date');
            $table->integer('renewed')->nullable();
            $table->boolean('is_lent')->default(true);
            $table->boolean('is_return')->default(false);
            $table->date('return_date')->nullable();
            $table->date('input_date')->default(now()->toDateString());
            $table->date('last_update');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
