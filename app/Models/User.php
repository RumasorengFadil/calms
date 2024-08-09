<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'real_name',
        'email',
        'password',
        'last_login',
        'input_date',
        'last_update'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $primaryKey = 'admin_id';
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public static function register(){
        return User::create([
            "username" => "Fadil",
            "real_name" => "Admin",
            "email" => "fadilhr54@gmail.com",
            "password" => Hash::make("FadIl@321"),
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString()
        ]);
    }
    public static function login(){
        
    }
}
