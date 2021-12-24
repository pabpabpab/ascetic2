<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserFavoriteProduct extends Pivot
{
    use HasFactory;

    protected $table = 'users_favorite_products';
    public $incrementing = true;
}
