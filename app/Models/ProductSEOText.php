<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSEOText extends Model
{
    use HasFactory;

    protected $table = 'products_seo_texts';

    protected $fillable = [
        'id',
        'product_id',
        'page_title',
        'page_description',
    ];

    protected $attributes = [
        'page_title' => '',
        'page_description' => '',
    ];

    public $timestamps = false;
}


// php artisan make:model ProductSEOText


