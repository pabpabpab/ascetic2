<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorsSeeder extends Seeder
{
    public function run()
    {
        $data = [
            ['name' => 'Белый'],
            ['name' => 'Белёный'],
            ['name' => 'Светлое дерево'],
            ['name' => 'Коричневый'],
            ['name' => 'Красный'],
            ['name' => 'Серый'],
            ['name' => 'Чёрный']
        ];

        DB::table('colors')
            ->insert($data);
    }
}
