<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemCodePattern extends Model
{
    use HasFactory;
    protected $primaryKey = 'pattern_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "item_code_pattern",
        "input_date",
        "last_update",
    ];

    public static function addPattern($request)
    {
        Member::create([
            "item_code_pattern" => $request->itemCodePattern,
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
