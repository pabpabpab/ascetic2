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
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
/*
    protected $dispatchesEvents = [
        'created' => UserRegistered::class,
    ];
*/


    public function getAll()
    {
        return static::query()
            ->orderBy('id', 'asc')
            ->get();
    }

    public function getMore($lastId)
    {
        return static::where('id', '>', $lastId)
            ->orderBy('id', 'asc')
            ->get();
    }


    public function updateRole(string $role): array {
        $this->role = $role;
        return [
            'success' => $this->save(),
            'user' => $this
        ];
    }

    public function _hasRole($role): bool
    {
        return $this->role == $role;
    }


    public function getUserName()
    {
        return $this->name;
    }


    /*
        public function updateRole(int $id, string $role): array {
            $model = User::find($id);
            $model->role = $role;
            return [
                'success' => $model->save(),
                'user' => $model
            ];
        }
    */
}
