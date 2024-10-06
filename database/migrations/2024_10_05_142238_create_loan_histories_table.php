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
        Schema::create('loan_histories', function (Blueprint $table) {
            $table->unsignedBigInteger('loan_id'); // Foreign key to loans table
            
            $table->foreign('loan_id') // Defining loans the foreign key constraint
            ->references('loan_id')
            ->on('loans')
            ->onDelete('cascade');

            $table->string('item_code');

            $table->unsignedBigInteger('biblio_id'); // Foreign key to biblios table

            $table->foreign('biblio_id') // Defining biblios the foreign key constraint
            ->references('biblio_id')
            ->on('biblios')
            ->onDelete('cascade');

            $table->string('title');
            $table->string('call_number')->nullable();
            $table->string('classification')->nullable();
            $table->string('location_name')->nullable();
            $table->string('location_type_name')->nullable();
            
            $table->unsignedBigInteger('member_id'); // Foreign key to members table
                        
            $table->foreign('member_id') // Defining members the foreign key constraint
            ->references('member_id')
            ->on('members')
            ->onDelete('cascade');

            $table->string('member_name');
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
        Schema::dropIfExists('loan_histories');
    }
};
