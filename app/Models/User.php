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
    ];

    protected $hidden = [
        'password',
        'remember_token',
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


    /*

    public function getMore($lastId)
    {
        return static::where('id', '>', $lastId)
            ->orderBy('id', 'asc')
            ->get();
    }
    */
}
