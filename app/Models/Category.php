<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

    public $timestamps = false;

    protected $attributes = [
        'products_count' => 0,
    ];

    /**
     * The products that belong to the category.
     * Many-to-many relationship for products
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(
            Product::class,
            'products_categories',
            'category_id',
            'product_id'
        )->orderBy('position', 'desc');
    }

    /*
        public function products(): HasMany
        {
            return $this->hasMany(Product::class)->orderBy('position', 'desc');
        }
    */

    // One-to-one relationship for category SEO text
    public function seoText() {
        return $this->hasOne(
            CategorySEOText::class,
            'category_id'
        );
    }

}
