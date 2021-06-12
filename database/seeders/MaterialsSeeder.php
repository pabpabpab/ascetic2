<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MaterialsSeeder extends Seeder
{
    public function run()
    {
        $data = [
           ['name' => 'Берёза'],
           ['name' => 'Сосна'],
           ['name' => 'Ель'],
           ['name' => 'Дуб'],
           ['name' => 'Тополь']
        ];

        DB::table('materials')
            ->insert($data);
    }
}
