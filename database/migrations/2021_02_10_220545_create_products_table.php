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
            name VARCHAR(100) UNIQUE,
            products_count INT UNSIGNED NOT NULL DEFAULT 0, // добавлено потом
            position INT UNSIGNED NOT NULL DEFAULT 0, // добавлено потом (для выстраивания списка категорий на сайте в нужном порядке)

            INDEX products_count_idx(products_count), // добавлено потом
            INDEX position_idx(position) // добавлено потом
        )');


        // Colors
        DB::statement('DROP TABLE IF EXISTS colors');
        DB::statement('CREATE TABLE colors (
            id SERIAL,
            name VARCHAR(50) UNIQUE,
            products_count INT UNSIGNED NOT NULL DEFAULT 0,
            position INT UNSIGNED NOT NULL DEFAULT 0,

            INDEX products_count_idx(products_count),
            INDEX position_idx(position)
        )');


        // Materials
        DB::statement('DROP TABLE IF EXISTS materials');
        DB::statement('CREATE TABLE materials (
            id SERIAL,
            name VARCHAR(50) UNIQUE,
            products_count INT UNSIGNED NOT NULL DEFAULT 0,
            position INT UNSIGNED NOT NULL DEFAULT 0,

            INDEX products_count_idx(products_count),
            INDEX position_idx(position)
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
            photo_alt_set JSON, // добавлено потом (alt-тексты для фото)
            position BIGINT UNSIGNED NOT NULL DEFAULT 0, // добавлено потом (для выстраивания списка товаров)
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at DATETIME,

            INDEX position_idx(position), // добавлено потом
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
            id SERIAL,
            product_id BIGINT UNSIGNED NOT NULL,
	        description TEXT,
            UNIQUE product_id_idx(product_id),
            FOREIGN KEY product_id_fk(product_id) REFERENCES products(id)
        )');


        // Фото товаров
        DB::statement('DROP TABLE IF EXISTS photo');
        DB::statement('CREATE TABLE photo (
            id SERIAL,
            product_id BIGINT UNSIGNED NOT NULL,
            filename VARCHAR(100),
            alt_text VARCHAR(100) NOT NULL DEFAULT "", // добавлено потом (alt-тексты для SEO)
            position BIGINT UNSIGNED NOT NULL DEFAULT 0, // добавлено потом (для выстраивания списка фото)
            INDEX product_id_idx(product_id),
            INDEX position_idx(position), // добавлено потом

            FOREIGN KEY (product_id) REFERENCES products(id)
        )');




        // Pivot-tables Pivot-tables Pivot-tables Pivot-tables Pivot-tables

        DB::statement('DROP TABLE IF EXISTS products_colors');
        DB::statement('CREATE TABLE products_colors (
            id SERIAL,
            product_id BIGINT UNSIGNED,
            color_id BIGINT UNSIGNED,
            INDEX product_id_idx(product_id),
            INDEX color_id_idx(color_id),
            FOREIGN KEY product_id_fk(product_id) REFERENCES products(id),
            FOREIGN KEY color_id_fk(color_id) REFERENCES colors(id),
        )');


        DB::statement('DROP TABLE IF EXISTS products_materials');
        DB::statement('CREATE TABLE products_materials (
            id SERIAL,
            product_id BIGINT UNSIGNED,
            material_id BIGINT UNSIGNED,
            INDEX product_id_idx(product_id),
            INDEX material_id_idx(material_id),
            FOREIGN KEY product_id_fk(product_id) REFERENCES products(id),
            FOREIGN KEY color_id_fk(material_id) REFERENCES materials(id),
        )');







        // SEO SEO SEO SEO SEO SEO SEO SEO SEO SEO SEO SEO

        // page SEO titles and descriptions for categories
        DB::statement('DROP TABLE IF EXISTS categories_seo_texts');
        DB::statement('CREATE TABLE categories_seo_texts (
            id SERIAL,
            category_id BIGINT UNSIGNED NOT NULL,
	        page_title TEXT,
	        page_description TEXT,
            UNIQUE category_id_idx(category_id),
            FOREIGN KEY category_id_fk(category_id) REFERENCES categories(id)
        )');


        // page SEO titles and descriptions for products
        DB::statement('DROP TABLE IF EXISTS products_seo_texts');
        DB::statement('CREATE TABLE products_seo_texts (
            id SERIAL,
            product_id BIGINT UNSIGNED NOT NULL,
	        page_title TEXT,
	        page_description TEXT,
            UNIQUE product_id_idx(product_id),
            FOREIGN KEY product_id_fk(product_id) REFERENCES products(id)
        )');

        // page SEO titles and descriptions for single photo
        DB::statement('DROP TABLE IF EXISTS photo_seo_texts');
        DB::statement('CREATE TABLE photo_seo_texts (
            id SERIAL,
            photo_id BIGINT UNSIGNED NOT NULL,
	        page_title TEXT,
	        page_description TEXT,
            UNIQUE photo_id_idx(product_id),
            FOREIGN KEY photo_id_fk(photo_id) REFERENCES photo(id)
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

        Schema::dropIfExists('categories_seo_titles');
        Schema::dropIfExists('products_seo_titles');
        Schema::dropIfExists('photo_seo_titles');
    }
}
