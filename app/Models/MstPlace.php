<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstPlace extends Model
{
    use HasFactory;
    protected $primaryKey = 'place_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "place_name",
        "input_date",
        "last_update",
    ];

    public function biblios()
    {
        return $this->hasMany(Biblio::class, 'place_id');
    }
}
