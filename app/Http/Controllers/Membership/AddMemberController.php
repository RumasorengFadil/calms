<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\AddMemberRequest;
use App\Models\Member;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\ImageManager;

class AddMemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/AddMember');
    }
    public function addMember(AddMemberRequest $request): Response
    {
        // Mendapatkan photo dan membuat nama unik
        $image = $request->file('memberPhoto');
        $filename = uniqid() . '_' . $image->getClientOriginalName();

        // Resize image
        $resizedImage = ImageManager::imagick()->read($image)->resize(200,300);

        // Simpan gambar yang di-resize ke storage
        Storage::put("public/members/photo/$filename", (string) $resizedImage->encode());
        
        // Tambahkan data member beserta path gambar ke dalam database
        Member::addMember($request->all() + ['memberPhotoPath' => "public/members/photo/$filename"]);
        
        return Inertia::render("Membership/Membership", ["message" => __("message.member.added")]);
    }
}

    // Gunakan cara ini ketika menyimpan file atau gambar yang tidak membutuhkan manipulasi
    // $path = $request->file('memberPhoto')->store('public/member/photo');
    