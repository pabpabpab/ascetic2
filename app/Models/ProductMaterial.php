<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductMaterial extends Pivot
{
    use HasFactory;

    protected $table = 'products_materials';
    public $incrementing = true;
}

// php artisan make:model ProductMaterial --pivot

// php artisan make:model UserFavoriteProduct --pivot
