<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'price',
        'position',
    ];

    protected $attributes = [
        'parameters' => '[]',
        'photo_set' => '[]',
        'photo_alt_set' => '[]',
    ];



    /**
     * The categories that belong to the product.
     * Many-to-many relationship for categories
     */
    public function categories() {
        return $this->belongsToMany(
            Category::class,
            'products_categories',
            'product_id',
            'category_id'
        );
    }

    /*
    // One-to-many (Inverse) / Belongs To (to access its parent Category)
    public function category() {
        return $this->belongsTo(Category::class);
    }
    */

    // One-to-one relationship for product description
    public function description() {
        return $this->hasOne(
            ProductDescription::class,
            'product_id'
        );
    }


    // One-to-many relationship for photos
    public function photo() {
        return $this->hasMany(
            Photo::class,
            'product_id',
            'id'
        )->orderBy('position', 'asc');
    }


    /**
     * The colors that belong to the product.
     * Many-to-many relationship for colors
     */
    public function colors()
    {
        return $this->belongsToMany(
            Color::class,
            'products_colors',
            'product_id',
            'color_id'
        );
    }


    /**
     * The materials that belong to the product.
     * Many-to-many relationship for materials
     */
    public function materials()
    {
        return $this->belongsToMany(
            Material::class,
            'products_materials',
            'product_id',
            'material_id'
        );
    }


    // One-to-one relationship for product SEO text
    public function seoText() {
        return $this->hasOne(
            ProductSEOText::class,
            'product_id'
        );
    }

    // Has Many Through
    /*
    public function photoSeoTexts()
    {
        return $this->hasManyThrough(PhotoSEOText::class, Photo::class);
    }
   */
}
