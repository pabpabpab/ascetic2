<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorySEOText extends Model
{
    use HasFactory;

    protected $table = 'categories_seo_texts';

    protected $fillable = [
        'id',
        'category_id',
        'page_title',
        'page_description',
    ];

    protected $attributes = [
        'page_title' => '',
        'page_description' => '',
    ];

    public $timestamps = false;
}


// php artisan make:model CategorySEOText
