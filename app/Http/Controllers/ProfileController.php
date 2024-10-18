<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Member;
use App\Repositories\Membership\MemberRepository;
use App\Services\PhotoService;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    protected $memberRepository;
    protected $photoService;

    public function __construct(MemberRepository $memberRepository, PhotoService $photoService)
    {
        $this->memberRepository = $memberRepository;
        $this->photoService = $photoService;
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
            $member = Auth::user();

            // Data sudah tervalidasi oleh UpdateMemberRequest
            $validatedData = $request->validated();

            // Update data foto sebelumnya
            $memberPhotoPath = $this->photoService->handleUpdatePhoto($validatedData['memberPhoto'], $member['member_photo_path'], 'member');

            // Tambahkan data member beserta path gambar ke dalam database
            $this->memberRepository->update($validatedData + ['memberPhotoPath' => $memberPhotoPath], $member);

            return redirect()->back()
                ->with(['message' => __('message.success.updated', ['entity' => 'Member'])]);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
