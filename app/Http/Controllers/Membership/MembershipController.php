<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\StoreMemberRequest;
use App\Http\Requests\Membership\UpdateMemberRequest;
use App\Models\Member;
use App\Repositories\Membership\MemberRepository;
use App\Services\PhotoService;
use Inertia\Inertia;

class MembershipController extends Controller
{
    protected $memberRepository;
    public function __construct(MemberRepository $memberRepository)
    {
        $this->memberRepository = $memberRepository;
    }
    public function index()
    {
        $members = $this->memberRepository->index(10);

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

        // Handle foto member
        $filename = PhotoService::handleMemberPhoto($validatedData->file('memberPhoto'));

        // Tambahkan data member beserta path gambar ke dalam database
        $this->memberRepository->store($validatedData + ['memberPhotoPath' => "public/members/photo/$filename"]);

        return Inertia::render("Membership/CreateMember", ["message" => __("message.success.added", ["entity" => "Member"])]);
    }
    public function edit($id)
    {
        return Inertia::render('Membership/EditMember', ['id' => $id]);
    }
    public function update(UpdateMemberRequest $request, $id)
    {
        // Data sudah tervalidasi oleh UpdateMemberRequest
        $validatedData = $request->validated();

        // Menghapus data foto sebelumnya
        PhotoService::removePhoto($validatedData->memberPhotoPath);

        // Handle foto member
        $filename = PhotoService::handleMemberPhoto($validatedData->file('memberPhoto'));

        // Tambahkan data member beserta path gambar ke dalam database
        $this->memberRepository->update($validatedData + ['memberPhotoPath' => "public/members/photo/$filename"], $id);

        return Inertia::render('Membership/EditMember', ["message" => __("message.success.updated", ["entity" => "Member"])]);
    }
    public function destroy($id)
    {
        $member = Member::findOrFail($id);

        PhotoService::removePhoto($member->memberPhotoPath);

        $this->memberRepository->destroy($member);

        return Inertia::render("Membership/Memberships", ["message" => __("message.success.deleted", ["entity" => "Member"])]);
    }
}
