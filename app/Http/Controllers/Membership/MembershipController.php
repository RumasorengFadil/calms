<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\StoreMemberRequest;
use App\Http\Requests\Membership\UpdateMemberRequest;
use App\Models\Member;
use App\Services\PhotoService;
use Inertia\Inertia;

class MembershipController extends Controller
{
    public function index()
    {
        $members = Member::paginate(10);
        return Inertia::render('Membership/Memberships', ["members" => $members]);
    }

    public function create()
    {
        return Inertia::render('Membership/CreateMember');
    }
    public function store(StoreMemberRequest $request)
    {
        // Data sudah tervalidasi oleh StoreMemberRequest
        $validatedData = $request->validated();

        // Mendapatkan foto
        $image = $validatedData->file('memberPhoto');

        // Handle foto member
        $filename = PhotoService::handleMemberPhoto($image);

        // Tambahkan data member beserta path gambar ke dalam database
        Member::addMember($validatedData->all() + ['memberPhotoPath' => "public/members/photo/$filename"]);

        return Inertia::render("Membership/CreateMember", ["message" => __("message.success.added", ["entity" => "Member"])]);
    }
    public function edit($id)
    {
        return Inertia::render('Bibliography/EditMember', ['id' => $id]);
    }
    public function update(UpdateMemberRequest $request, $id)
    {
        // Data sudah tervalidasi oleh UpdateMemberRequest
        $validatedData = $request->validated();

        // Menghapus data foto sebelumnya
        PhotoService::removePhoto($validatedData->memberPhotoPath);

        // Mendapatkan photo
        $image = $validatedData->file('memberPhoto');

        // Handle foto member
        $filename = PhotoService::handleMemberPhoto($image);

        // Tambahkan data member beserta path gambar ke dalam database
        Member::updateMember($request->all() + ['memberPhotoPath' => "public/members/photo/$filename", 'id' => $id]);

        return Inertia::render('Bibliography/EditMember', ["message" => __("message.success.updated", ["entity" => "Member"])]);
    }
    public function destroy($id)
    {
        $member = Member::findOrFail($id);
        PhotoService::removePhoto($member->memberPhotoPath);
        $member->delete();

        return Inertia::render("Membership/Memberships", ["message" => __("message.success.deleted", ["entity" => "Member"])]);
    }
}
