<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\AddMemberRequest;
use App\Models\Member;
use App\Services\PhotoService;
use Inertia\Inertia;
use Inertia\Response;

class AddMemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/AddMember');
    }
    public function addMember(AddMemberRequest $request): Response
    {
        // Mendapatkan foto
        $image = $request->file('memberPhoto');

        // Handle foto member
        $filename = PhotoService::handleMemberPhoto($image);

        // Tambahkan data member beserta path gambar ke dalam database
        Member::addMember($request->all() + ['memberPhotoPath' => "public/members/photo/$filename"]);

        return Inertia::render("Membership/Membership", ["message" => __("message.member.added")]);
    }
}

// Gunakan cara ini ketika menyimpan file atau gambar yang tidak membutuhkan manipulasi
// $path = $request->file('memberPhoto')->store('public/member/photo');
