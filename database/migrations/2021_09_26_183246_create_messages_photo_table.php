<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesPhotoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /*
    public function up()
    {
        Schema::create('messages_photo', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('message_id');
            $table->string('filename', 100);

            $table->index('message_id', 'message_id_idx');
            $table->foreign('message_id')->references('id')->on('messages');
        });
    }
    */
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    /*
    public function down()
    {
        Schema::dropIfExists('messages_photo');
    }
    */
}

// php artisan make:migration create_messages_photo_table
