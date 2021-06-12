<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public $timestamps = false;

    protected $attributes = [
        'products_count' => 0,
    ];

    public function getAll()
    {
        return static::query()
            ->orderBy('id', 'asc')
            ->get();
    }

    public function saveOne(string $name): array {
        $model = $this->id > 0 ? $this : new Category();
        $model->name = $name;
        return [
            'success' => $model->save(),
            'category' => $model
        ];
    }

/*
    public function saveOne(string $name, $id = 0): array {
        $model = $id ? $this->find($id) : new Category();
        $model->name = $name;
        return [
            'success' => $model->save(),
            'category' => $model
        ];
    }
*/


}
