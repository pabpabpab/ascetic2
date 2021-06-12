<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run()
    {
        $data = [];
        for($i=8; $i<=105; $i++) {
            $data = [
                'name' => 'User'.$i,
                'role' => 'user',
                'email' => 'user'.$i.'@123.ru',
                'password' => Hash::make('12345678'),
            ];

            DB::table('users')
                ->insert($data);
        }
    }
}
