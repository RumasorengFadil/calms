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
        "input_date",
        "last_update",
    ];

    public static function addAuthor($request)
    {
        return Member::create([
            "author_name" => $request->authorName,
            "author_year" => $request->authorYear,
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
