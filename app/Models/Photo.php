<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $table = 'photo';

    protected $fillable = [
        'id',
        'product_id',
        'filename',
        'position',
        'alt_text',
    ];

    protected $attributes = [
        'alt_text' => '',
    ];

    public $timestamps = false;


    // One-to-one relationship for single photo SEO text
    public function seoText() {
        return $this->hasOne(
            PhotoSEOText::class,
            'photo_id'
        );
    }

}



