<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Color extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
    ];


    protected $attributes = [
        'products_count' => 0,
    ];

    public $timestamps = false;


    /**
     * The products that belong to the color.
     * Many-to-many relationship for products
     */

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(
            Product::class,
            'products_colors',
            'color_id',
            'product_id'
        );
    }

}
