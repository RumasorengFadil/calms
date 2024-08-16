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

    public static function addBiblio($request)
    {
        return Biblio::create([
            "title" => $request->title,
            "edition" => $request->edition,
            "isbn_issn" => $request->isbnIssn,
            "publisher_id" => $request->gender,
            "language_id" => $request->memberSinceDate,
            "publish_place_id" => $request->registerDate,
            "expire_date" => $request->expireDate,
            "inst_name" => $request->instName,
            "member_address" => $request->memberAddress,
            "postal_code" => $request->postalCode,
            "member_phone" => $request->memberPhone,
            "pin" => $request->pin,
            "member_photo" => $request->memberPhoto,
            "member_photo_path" => $request->memberPhotoPath,
            "member_email" => $request->memberEmail,
            "member_password" => $request->memberPassword,
            "last_login" => now(),
            "input_date" => now()->toDateString(),
            "last_update" => now()->toDateString(),
        ]);
    }
}
