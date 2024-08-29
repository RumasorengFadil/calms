<?php

namespace App\Http\Controllers\Membership;

use App\Exceptions\PhotoHandlingException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\StoreMemberRequest;
use App\Http\Requests\Membership\UpdateMemberRequest;
use App\Models\Member;
use App\Repositories\Membership\MemberRepository;
use App\Services\PhotoService;
use Inertia\Inertia;
use Redirect;

class MembershipController extends Controller
{
    protected $memberRepository;
    protected $photoService;

    public function __construct(MemberRepository $memberRepository, PhotoService $photoService)
    {
        $this->memberRepository = $memberRepository;
        $this->photoService = $photoService;
    }
    public function index()
    {
        try {
            $members = $this->memberRepository->index(10);
            return Inertia::render('Membership/Memberships', ["members" => $members]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to fetch member: " . $e->getMessage());

            // Redirect back with error message
            Redirect::back()->withErrors(['error' => __("message.error.fetched", ["entity" => "Member"])]);
        }
    }

    public function create()
    {
        return Inertia::render('Membership/CreateMember');
    }
    public function store(StoreMemberRequest $request)
    {

        try {
            // Data sudah tervalidasi oleh StoreMemberRequest
            $validatedData = $request->validated();

            // Handle foto member
            $filename = $this->photoService->handleMemberPhoto($validatedData->file('memberPhoto'));

            // Tambahkan data member beserta path gambar ke dalam database
            $this->memberRepository->store($validatedData + ['memberPhotoPath' => "public/members/photo/$filename"]);

            return Redirect::route('membership.create')
                ->with(["message" => __("message.success.stored", ["entity" => "Member"])]);

        }catch(PhotoHandlingException $e){
            return $e->render($request);
        } 
        catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to store member: " . $e->getMessage());

            // Redirect back with error message
            Redirect::back()->withErrors(['error' => __("message.error.stored", ["entity" => "Member"])]);
        }

    }
    public function edit($id)
    {
        return Inertia::render('Membership/EditMember', ['id' => $id]);
    }
    public function update(UpdateMemberRequest $request, $id)
    {
        try {
            // Data sudah tervalidasi oleh UpdateMemberRequest
            $validatedData = $request->validated();

            // Menghapus data foto sebelumnya
            $this->photoService->removePhoto($validatedData->memberPhotoPath);

            // Handle foto member
            $filename = $this->photoService->handleMemberPhoto($validatedData->file('memberPhoto'));

            // Tambahkan data member beserta path gambar ke dalam database
            $this->memberRepository->update($validatedData + ['memberPhotoPath' => "public/members/photo/$filename"], $id);

            return Redirect::route('membership.edit')
                ->with(["message" => __("message.success.updated", ["entity" => "Member"])]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to update member: " . $e->getMessage());

            // Redirect back with error message
            Redirect::back()->withErrors(['error' => __("message.error.updated", ["entity" => "Member"])]);
        }

    }
    public function destroy($id)
    {
        try {
            $member = Member::findOrFail($id);

            $this->photoService->removePhoto($member->memberPhotoPath);

            $this->memberRepository->destroy($member);
            return Redirect::route('membership.index')
                ->with(["message" => __("message.success.destroy", ["entity" => "Member"])]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to destroy member: " . $e->getMessage());

            // Redirect back with error message
            Redirect::back()->withErrors(['error' => __("message.error.destroy", ["entity" => "Member"])]);
        }

    }
}
