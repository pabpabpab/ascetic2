<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDescription extends Model
{
    use HasFactory;

    protected $table = 'products_descriptions';

    protected $fillable = [
        'id',
        'product_id',
        'description'
    ];


    /*
     * By default, Eloquent expects created_at and updated_at columns
     *  to exist on your model's corresponding database table.
     * Eloquent will automatically set these column's values when models are created or updated.
     * If you do not want these columns to be automatically managed by Eloquent,
     * you should define a $timestamps property on your model with a value of false:
     */

    public $timestamps = false;

}


// php artisan make:model ProductDescription


