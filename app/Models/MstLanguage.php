<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstLanguage extends Model
{
    use HasFactory;

    use HasFactory;
    protected $primaryKey = 'language_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "language_name",
        "input_date",
        "last_update",
    ];

    public static function addLanguage($request)
    {
        Member::create([
            "language_name" => $request->languageName,
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
