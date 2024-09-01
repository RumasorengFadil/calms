<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Biblio extends Model
{
    use HasFactory;

    protected $primaryKey = 'biblio_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "title",
        "edition",
        "isbn_issn",
        "publisher_id",
        "language_id",
        "publish_place_id",
        "publish_year",
        "collation",
        "series_title",
        "call_number",
        "classfication",
        "category",
        "notes",
        "biblio_photo",
        "biblio_photo_path",
        "spec_detail_info",
        "input_date",
        "last_update",
    ];

    public function language()
    {
        return $this->belongsTo(MstLanguage::class, 'language_id');
    }

    public function publisher()
    {
        return $this->belongsTo(MstPublisher::class, 'publisher_id');
    }

    public function place()
    {
        return $this->belongsTo(MstPlace::class, 'place_id');
    }

    public function authors()
    {
        return $this->hasMany(BiblioAuthor::class, 'biblio_id');
    }

    public function items()
    {
        return $this->hasMany(Item::class, 'biblio_id');
    }
}
