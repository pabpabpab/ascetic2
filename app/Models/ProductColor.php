<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ProductColor extends Pivot
{
    use HasFactory;

    protected $table = 'products_colors';
    public $incrementing = true;
}

// php artisan make:model ProductColor --pivot
