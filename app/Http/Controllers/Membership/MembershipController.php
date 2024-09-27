<?php

namespace App\Http\Controllers\Membership;

use App\Exceptions\PhotoHandlingException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchRequest;
use App\Http\Requests\Membership\DestroysMemberRequest;
use App\Http\Requests\Membership\StoreMemberRequest;
use App\Http\Requests\Membership\UpdateMemberRequest;
use App\Models\Member;
use App\Repositories\Membership\MemberRepository;
use App\Services\MemberService;
use App\Services\PhotoService;
use Inertia\Inertia;
use Redirect;

class MembershipController extends Controller
{
    protected $memberRepository;
    protected $photoService;
    protected $memberService;

    public function __construct(MemberRepository $memberRepository, PhotoService $photoService, MemberService $memberService)
    {
        $this->memberRepository = $memberRepository;
        $this->photoService = $photoService;
        $this->memberService = $memberService;
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
            redirect()->back()->withErrors(['error' => __("message.error.fetched", ["entity" => "Member"])]);
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
            $memberPhotoPath = $this->photoService->handlePhoto($validatedData['memberPhoto'], 'member');

            // Tambahkan data member beserta path gambar ke dalam database
            $this->memberRepository->store($validatedData + ['memberPhotoPath' => $memberPhotoPath]);

            return redirect()->route('membership.create')
                ->with(["message" => __("message.success.stored", ["entity" => "Member"])]);

        } catch (PhotoHandlingException $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to store member: " . $e->getMessage());

            dd($e->getMessage());
            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __("message.error.stored", ["entity" => "Member"])]);
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
            $this->photoService->removePhoto($validatedData->memberPhotoPath, 'member');

            // Handle foto member
            $memberPhotoPath = $this->photoService->handlePhoto($validatedData->file('memberPhoto'), 'member');

            // Tambahkan data member beserta path gambar ke dalam database
            $this->memberRepository->update($validatedData + ['memberPhotoPath' => "public/members/photo/$memberPhotoPath"], $id);

            return redirect()->route('membership.edit')
                ->with(["message" => __("message.success.updated", ["entity" => "Member"])]);

        } catch (PhotoHandlingException $e) {
            return redirect()->back()->withErrors(['error' => $e->getMessage()]);
        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to update member: " . $e->getMessage());

            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __("message.error.updated", ["entity" => "Member"])]);
        }

    }
    public function destroy($id)
    {
        try {
            $member = Member::findOrFail($id);

            $this->photoService->removePhoto($member->memberPhotoPath, 'member');

            $this->memberService->deleteMember($member);
            return redirect()->back()
                ->with(["message" => __("message.success.destroyed", ["entity" => "Member"])]);

        } catch (\Exception $e) {
            // Log the error for debugging
            \Log::error("Failed to destroy member: " . $e->getMessage());
            // Redirect back with error message
            redirect()->back()->withErrors(['error' => __("message.error.destroyed", ["entity" => "Member"])]);
        }

    }
    public function destroys(DestroysMemberRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh DestroysBiblioRequest
            $validatedData = $request->validated();


            $this->memberService->deleteMembers($validatedData['selectedMemberIds']);

            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Member'])]);

        } catch (\Exception $e) {
            \Log::error('Failed to update biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Member'])]);
        }
    }
    public function search(SearchRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh SearchBiblioRequest
            $validatedData = $request->validated();
            
            $members = $this->memberRepository->search($validatedData["searchKey"]);

            return Inertia::render('Membership/Memberships', [
                'members' => $members,
            ]);
        } catch (\Exception $e) {
            // Menyimpan log error
            \Log::error('Failed to search biblios: ' . $e->getMessage());

            // Menyediakan feedback kepada pengguna
            redirect()->back()->withErrors(['error' => __("message.error.searched", ["entity" => "Member"])]);
        }
    }
}
