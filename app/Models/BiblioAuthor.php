<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BiblioAuthor extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "biblio_id",
        "author_id",
    ];

    public static function assignAuthorToBiblio($request)
    {
        Member::create([
            "biblio_id" => $request->biblioId,
            "author_id" => $request->authorId,
        ]);
    }

    public function biblio()
    {
        return $this->belongsTo(Biblio::class, 'biblio_id');
    }
}
