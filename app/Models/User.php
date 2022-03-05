<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'role',
        'email',
        'email_verified_at',
        'social_id',
        'social_network',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    // на случай регистрации через соцсеть
    protected $attributes = [
        'password' => '',
        'email' => '',
        'social_id' => '',
        'social_network' => '',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function _hasRole($role): bool
    {
        return $this->role == $role;
    }

    // используется в контроллерах по auth user
    public function getUserName()
    {
        return $this->name;
    }


    /**
     * The products that belong to the user.
     * Many-to-many relationship for products
     */
    public function favoriteProducts()
    {
        return $this->belongsToMany(
            Product::class,
            'users_favorite_products',
            'user_id',
            'product_id'
        );
    }



    /*

    public function getMore($lastId)
    {
        return static::where('id', '>', $lastId)
            ->orderBy('id', 'asc')
            ->get();
    }
    */
}
