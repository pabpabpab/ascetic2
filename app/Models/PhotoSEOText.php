<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoSEOText extends Model
{
    use HasFactory;


    protected $table = 'photo_seo_texts';

    protected $fillable = [
        'id',
        'photo_id',
        'page_title',
        'page_description',
    ];

    protected $attributes = [
        'page_title' => '',
        'page_description' => '',
    ];

    public $timestamps = false;
}

// php artisan make:model PhotoSEOText
