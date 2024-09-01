<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $primaryKey = 'item_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "biblio_id",
        "item_code",
        "col_type_id",
        "received_date",
        "input_date",
        "last_update",
    ];

    public static function addItem($request)
    {
        return Item::create([
            "biblio_id" => $request->biblioId,
            "item_code" => $request->itemCode,
            "received_date" => $request->receivedDate,
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
