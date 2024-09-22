<?php

namespace App\Services;

use App\Exceptions\PhotoHandlingException;
use App\Models\Biblio;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\Storage;

class PhotoService
{
    const MEMBER_PHOTO_PATH = '/uploads/img/members/photo/';
    const BIBLIO_PHOTO_PATH = '/uploads/img/biblios/photo/';
    const DEFAULT_PHOTO_PATH = '/img/bibliography/biblio-default-picture.png';

    public function handlePhoto($image, $type)
    {
        try {
            // create new manager instance with desired driver
            $manager = new ImageManager(new Driver());

            // Membuat nama file unik
            $filename = uniqid() . '_' . $image->getClientOriginalName();
            $path = $this->getPathByType($type);

            // Resize gambar
            $resizedImage = $manager->read($image)->resize(88, 120);
            
            // Simpan gambar
            Storage::disk('public')->put((string) $path . $filename, $resizedImage->encode());
            
            // Kembalikan URL yang dapat diakses
            return $filename;
        } catch (\Exception $e) {
            dd($e->getMessage());
            throw new PhotoHandlingException("Failed to handle $type photo", 0, $e);
        }
    }
    public function handleUpdatePhoto($validatedData, $biblio, $type)
    {
        // Mengambil biblioPhotoPath
        $biblioPhotoPath = $biblio["biblio_photo_path"];

        // Mengambil biblioPhoto
        $biblioPhoto = $validatedData["biblioPhoto"];

        if($biblioPhoto === null) return $biblioPhotoPath;
        
        // Menghapus data foto sebelumnya
        self::removePhoto($biblioPhotoPath, $type);

        // Handle gambar biblio
        $filename = self::handlePhoto($validatedData['biblioPhoto'], $type);

        return $filename;
    }

    public function removePhoto($photoPath, $type)
    {
        $path = $this->getPathByType($type);
        // dd((string) $path . $photoPath);
        // dd(Storage::disk('public')->exists((string) $path . $photoPath));
        // "/uploads/img/biblios/photo/66ef84f4ccfc9_Screenshot 2024-05-11 133812.png"
        if (Storage::disk('public')->exists((string) $path . $photoPath)) {
            Storage::disk('public')->delete((string) $path . $photoPath);
        }
        // dd($photoPath);
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