<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $primaryKey = 'member_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'member_password',
        'remember_token',
    ];
    protected $casts = [
        'member_password' => 'hashed',
    ];
    protected $fillable = [
        'member_id',
        'member_name',
        'birth_date',
        'gender',
        'is_active',
        'member_since_date',
        'register_date',
        'expire_date',
        'inst_name',
        'member_address',
        'postal_code',
        'member_phone',
        'pin',
        'member_photo_path',
        'member_email',
        'member_password',
        'last_login',
        'input_date',
        'last_update',
    ];

    public function loans()
    {
        return $this->hasMany(Loan::class, 'member_id');
    }
}
