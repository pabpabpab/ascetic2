<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotoSeoTextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photo_seo_texts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('photo_id');
            $table->text('page_title');
            $table->text('page_description');
            $table->unique('photo_id', 'photo_id_idx');
            $table->foreign('photo_id')->references('id')->on('photo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('photo_seo_texts');
    }
}


// php artisan make:migration create_photo_seo_texts_table
