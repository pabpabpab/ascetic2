<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }


    // One-to-one relationship for category SEO text
    public function seoText() {
        return $this->hasOne(
            CategorySEOText::class,
            'category_id'
        );
    }

}
