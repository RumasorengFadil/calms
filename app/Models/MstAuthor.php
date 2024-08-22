<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstAuthor extends Model
{
    use HasFactory;
    protected $primaryKey = 'author_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "author_name",
        "author_year",
        "input_date",
        "last_update",
    ];
    
    public static function addAuthor($data)
    {
        return MstAuthor::create([
            "author_name" => $data["authorName"],
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
