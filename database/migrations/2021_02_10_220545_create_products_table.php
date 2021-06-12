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
        // Категория товара
        DB::statement('DROP TABLE IF EXISTS categories');
        DB::statement('CREATE TABLE categories (
            id SERIAL,
            name VARCHAR(100),
            products_count INT UNSIGNED NOT NULL DEFAULT 0 // добавлено потом
        )');


        // Товары
        DB::statement('DROP TABLE IF EXISTS products');
        DB::statement('CREATE TABLE products (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            category_id BIGINT UNSIGNED NOT NULL DEFAULT 0,
	        name VARCHAR(100),
            price DECIMAL(11, 2) NOT NULL DEFAULT 0,
            parameters JSON,
            photo_set JSON,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at DATETIME,

            INDEX category_idx(category_id),
            INDEX price_idx(price),
            INDEX product_name_idx(name(15)),
            INDEX created_at_idx(created_at),
            INDEX deleted_at_idx(deleted_at),

            FOREIGN KEY (category_id) REFERENCES categories(id)
        )');


        // Описание товаров
        DB::statement('DROP TABLE IF EXISTS products_descriptions');
        DB::statement('CREATE TABLE products_descriptions (
            product_id BIGINT UNSIGNED NOT NULL,
	        description TEXT,
	        deleted_at DATETIME,
            UNIQUE product_id_idx(product_id),
            FOREIGN KEY product_id_fk(product_id) REFERENCES products(id)
        )');

        // Фото товаров
        DB::statement('DROP TABLE IF EXISTS photo');
        DB::statement('CREATE TABLE photo (
            product_id BIGINT UNSIGNED NOT NULL,
            filename VARCHAR(100),
            deleted_at DATETIME,
            INDEX product_id_idx(product_id),
            INDEX deleted_at_idx(deleted_at),

            FOREIGN KEY (product_id) REFERENCES products(id)
        )');

    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
        Schema::dropIfExists('products');
        Schema::dropIfExists('products_descriptions');
        Schema::dropIfExists('photo');
    }
}
