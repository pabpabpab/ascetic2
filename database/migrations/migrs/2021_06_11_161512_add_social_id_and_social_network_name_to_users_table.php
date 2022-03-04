<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSocialIdAndSocialNetworkNameToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('social_id', 50)->nullable()
                ->comment('identity возвращаемое из ulogin.ru вида vk.com/id29888795');
            $table->string('social_network', 30)->nullable()
                ->comment('название соцсети');
            $table->index('social_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['social_id']);
            $table->dropColumn(['social_id', 'social_network']);
        });
    }
}
