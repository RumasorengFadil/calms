<?php

namespace App\Services;

use App\Models\Member;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;

class PhotoService
{
    public static function handleMemberPhoto($image)
    {
        // Membuat nama file unik
        $filename = uniqid() . '_' . $image->getClientOriginalName();

        // Resize image
        $resizedImage = ImageManager::imagick()->read($image)->resize(200, 300);
        // Simpan gambar yang di-resize ke storage
        Storage::put("public/members/photo/$filename", (string) $resizedImage->encode());

        return $filename;
    }

    public static function removePhoto($memberPhotoPath)
    {
        if ($memberPhotoPath) {
            Storage::delete("public/members/photo/$memberPhotoPath");
        }
    }
}