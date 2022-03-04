<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    /*
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('contact_id');
            $table->unsignedTinyInteger('read_status');

            $table->unsignedBigInteger('user_id');
            $table->decimal('user_cookie', $precision = 14, $scale = 2);

            $table->text('message');
            $table->json('photo_set');

            $table->ipAddress('ip_address');
            $table->timestamps();

            $table->index('contact_id', 'contact_id_idx');
            $table->index('created_at', 'created_at_idx');
            $table->index('user_id', 'user_id_idx');
            $table->index('user_cookie', 'user_cookie_idx');

            $table->foreign('contact_id')->references('id')->on('contacts');
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
        Schema::dropIfExists('messages');
    }
    */
}


// php artisan make:migration create_messages_table


