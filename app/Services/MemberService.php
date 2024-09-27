<?php

namespace App\Services;

use App\Models\Member;
use App\Repositories\Membership\MemberRepository;
use DB;

class MemberService
{
    protected $memberRepository;
    protected $photoService;


    public function __construct(
        MemberRepository $memberRepository, PhotoService $photoService
    ) {
        $this->memberRepository = $memberRepository;
        $this->photoService = $photoService;
    }

    public function deleteMember($biblio)
    {
        $this->photoService->removePhoto($biblio->biblio_photo_path, 'biblio');

        $this->memberRepository->destroy($biblio);
    }
    public function deleteMembers(array $selectedMemberIds)
    {
        DB::transaction(function () use ($selectedMemberIds) {
            $members = Member::whereIn('member_id', $selectedMemberIds)->get();
            foreach ($members as $member) {
                $this->photoService->removePhoto($member->memberPhotoPath, 'biblio');

                $this->memberRepository->destroy($member);
            }
        });
    }
}