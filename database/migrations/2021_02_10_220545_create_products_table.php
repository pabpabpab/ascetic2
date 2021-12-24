<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->unique();
            $table->unsignedInteger('products_count')->default(0);
            $table->unsignedInteger('position')->default(0);
            $table->string('slug', 130)->nullable();

            $table->index('products_count', 'products_count_idx');
            $table->index('position', 'position_idx');
            $table->unique('slug');
        });

        Schema::create('colors', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->unique();
            $table->unsignedInteger('products_count')->default(0);
            $table->unsignedInteger('position')->default(0);
            $table->string('slug', 130)->nullable();

            $table->index('products_count');
            $table->index('position');
            $table->unique('slug');
        });

        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50)->unique();
            $table->unsignedInteger('products_count')->default(0);
            $table->unsignedInteger('position')->default(0);
            $table->string('slug', 130)->nullable();

            $table->index('products_count');
            $table->index('position');
            $table->unique('slug');
        });



        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->decimal('price', $precision = 11, $scale = 2)->default(0);
            $table->json('parameters');
            $table->json('photo_set');
            $table->json('photo_alt_set');
            $table->string('slug', 150);
            $table->unsignedBigInteger('position')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->index('position', 'position_idx');
            $table->index('price', 'price_idx');
            // $table->index('name', 'product_name_idx');
            $table->index([DB::raw('name(15)')], 'product_name_idx');
            $table->index('created_at', 'created_at_idx');
            $table->index('deleted_at', 'deleted_at_idx');
        });


        Schema::create('products_descriptions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->text('description');

            $table->unique('product_id', 'product_id_idx');
            $table->foreign('product_id', 'product_id_fk')
                ->references('id')->on('products');
        });


        Schema::create('photo', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->string('filename', 100);
            $table->string('alt_text', 100)->default('');
            $table->unsignedBigInteger('position')->default(0);


            $table->unique('product_id', 'product_id_idx');
            $table->foreign('product_id', 'product_id_fk')
                ->references('id')->on('products');

            $table->index('product_id', 'product_id_idx');
            $table->index('position', 'position_idx');

            $table->foreign('product_id', 'product_id_fk')
                ->references('id')->on('products');
        });


        Schema::create('products_categories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('category_id');

            $table->index('product_id', 'product_id_idx');
            $table->index('category_id', 'category_id_idx');
            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('category_id')->references('id')->on('categories');
        });

        Schema::create('products_materials', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('material_id');

            $table->index('product_id', 'product_id_idx');
            $table->index('material_id', 'material_id_idx');
            $table->foreign('product_id', 'product_id_fk')->references('id')->on('products');
            $table->foreign('material_id', 'material_id_fk')->references('id')->on('materials');
        });

        Schema::create('products_colors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('color_id');

            $table->index('product_id', 'product_id_idx');
            $table->index('color_id', 'color_id_idx');
            $table->foreign('product_id', 'product_id_fk')->references('id')->on('products');
            $table->foreign('color_id', 'color_id_fk')->references('id')->on('colors');
        });

        Schema::create('users_favorite_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('product_id');

            $table->index('user_id', 'user_id_idx');
            $table->index('product_id', 'product_id_idx');
            $table->foreign('user_id', 'user_id_fk')->references('id')->on('users');
            $table->foreign('product_id', 'product_id_fk')->references('id')->on('products');
        });


        Schema::create('categories_seo_texts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->text('page_title');
            $table->text('page_description');

            $table->unique('category_id', 'category_id_idx');
            $table->foreign('category_id', 'category_id_fk')->references('id')->on('categories');
        });

        Schema::create('products_seo_texts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->text('page_title');
            $table->text('page_description');

            $table->unique('product_id', 'product_id_idx');
            $table->foreign('product_id', 'product_id_fk')->references('id')->on('products');
        });

        Schema::create('photo_seo_texts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('photo_id');
            $table->text('page_title');
            $table->text('page_description');

            $table->unique('photo_id', 'photo_id_idx');
            $table->foreign('photo_id', 'photo_id_fk')->references('id')->on('photo');
        });

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::dropIfExists('categories');
        Schema::dropIfExists('colors');
        Schema::dropIfExists('materials');
        Schema::dropIfExists('products');
        Schema::dropIfExists('products_descriptions');
        Schema::dropIfExists('photo');

        Schema::dropIfExists('products_categories');
        Schema::dropIfExists('products_colors');
        Schema::dropIfExists('products_materials');

        Schema::dropIfExists('users_favorite_products');

        Schema::dropIfExists('categories_seo_texts');
        Schema::dropIfExists('products_seo_texts');
        Schema::dropIfExists('photo_seo_texts');
    }
}
