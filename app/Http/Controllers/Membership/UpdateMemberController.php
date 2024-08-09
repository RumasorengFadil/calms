<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\UpdateMemberRequest;
use App\Models\Member;
use App\Services\PhotoService;
use Inertia\Inertia;
use Inertia\Response;

class UpdateMemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/UpdateMember');
    }
    public function updateMember(UpdateMemberRequest $request): Response
    {
        // Menghapus data foto sebelumnya
        PhotoService::removePhoto($request);
        
        // Mendapatkan photo
        $image = $request->file('memberPhoto');

        // Handle foto member
        $filename = PhotoService::handleMemberPhoto($image);
        
        // Tambahkan data member beserta path gambar ke dalam database
        Member::updateMember($request->all() + ['memberPhotoPath' => "public/members/photo/$filename"]);

        return Inertia::render("Membership/UpdateMember", ["message" => __("message.member.updated")]);
    }
}
