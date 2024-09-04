<?php

namespace App\Services;

use App\Exceptions\PhotoHandlingException;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;

class PhotoService
{
    const MEMBER_PHOTO_PATH = 'img/members/photo/';
    const BIBLIO_PHOTO_PATH = 'img/biblio/photo/';

    public function handlePhoto($image, $type)
    {
        try {
            // Membuat nama file unik
            $filename = uniqid() . '_' . $image->getClientOriginalName();
            $path = $this->getPathByType($type);

            // Resize image
            $resizedImage = ImageManager::imagick()->read($image)->resize(200, 300);

            // Simpan gambar yang di-resize ke storage
            Storage::disk('public')->put((string) $path . $filename, (string) $resizedImage->encode());

            // Kembalikan URL yang dapat diakses
            return Storage::url((string) $path . $filename);
        } catch (\Exception $e) {
            throw new PhotoHandlingException("Failed to handle $type photo", 0, $e);
        }
    }
    public function handleUpdatePhoto($validatedData, $type)
    {
        // Menghapus data foto sebelumnya
        self::removePhoto($validatedData->memberPhotoPath, $type);

        // Handle gambar biblio
        $filename = self::handlePhoto($validatedData->file('biblioPhoto'), $type);

        return $filename;
    }

    public function removePhoto($photoPath, $type)
    {
        $path = $this->getPathByType($type);
        if ($photoPath) {
            Storage::disk('public')->delete((string) $path . $photoPath);
        }
    }

    private function getPathByType($type)
    {
        return $type === 'member' ? self::MEMBER_PHOTO_PATH : self::BIBLIO_PHOTO_PATH;
    }
}

// class PhotoService
// {
//     public function handleMemberPhoto($image)
//     {
//         try {
//             // Membuat nama file unik
//             $filename = uniqid() . '_' . $image->getClientOriginalName();

//             // Resize image
//             $resizedImage = ImageManager::imagick()->read($image)->resize(200, 300);
//             // Simpan gambar yang di-resize ke storage
//             Storage::put("public/img/members/photo/$filename", (string) $resizedImage->encode());

//             return $filename;
//         } catch (\Exception $e) {
//             throw new PhotoHandlingException("Failed to handle member photo", 0, $e);
//         }

//     }
//     public function handleBiblioPhoto($image)
//     {
//         try {
//             // Membuat nama file unik
//             $filename = uniqid() . '_' . $image->getClientOriginalName();

//             // Resize image
//             $resizedImage = ImageManager::imagick()->read($image)->resize(200, 300);
//             // Simpan gambar yang di-resize ke storage
//             Storage::put("public/img/biblio/photo/$filename", (string) $resizedImage->encode());

//             return $filename;
//         } catch (\Exception $e) {
//             throw new PhotoHandlingException("Failed to handle biblio photo", 0, $e);
//         }

//     }
//     public function removeMemberPhoto($memberPhotoPath)
//     {
//         if ($memberPhotoPath) {
//             Storage::delete("public/img/members/photo/$memberPhotoPath");
//         }
//     }
//     public function removeBiblioPhoto($memberPhotoPath)
//     {
//         if ($memberPhotoPath) {
//             Storage::delete("public/img/biblio/photo/$memberPhotoPath");
//         }
//     }
// }