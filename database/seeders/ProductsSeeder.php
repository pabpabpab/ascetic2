<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('set @i := 0');
        DB::statement('update products set position = (@i := @i+1) where id > 0 order by id');

        /*
        DB::table('products')
            ->where('id', '>', 0)
            ->update(['position' =>  DB::raw('id')]);
        */
    }
}
