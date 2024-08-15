<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstPublisher extends Model
{
    use HasFactory;
    protected $primaryKey = 'publisher_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "publisher_name",
        "input_date",
        "last_update",
    ];

    public static function addPublisher($request)
    {
        return Member::create([
            "publisher_name" => $request->publisherName,
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
