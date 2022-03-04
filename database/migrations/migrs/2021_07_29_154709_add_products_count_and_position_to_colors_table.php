<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProductsCountAndPositionToColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('colors', function (Blueprint $table) {
            $table->unsignedInteger('products_count')
                ->after('name')
                ->default(0);
            $table->unsignedInteger('position')
                ->default(0);
            $table->index('products_count');
            $table->index('position');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('colors', function (Blueprint $table) {
            $table->dropIndex(['products_count', 'position']);
            $table->dropColumn(['products_count', 'position']);
        });
    }
}
