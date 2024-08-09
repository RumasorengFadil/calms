<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\CommonMemberRequest;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MemberStatusController extends Controller
{
    public function setMemberStatus(CommonMemberRequest $request): Response
    {
        $status = Member::setStatus($request);

        // return Inertia::render("Membership/DeactivateMember", ["message" => "Member" . ($status ? "activate" : "deactivate") . "successfully!"]);
        return Inertia::render("Membership/DeactivateMember", ["message" => __("message.member.statusChanged", ["status" => $status ? "activate" : "deactivate"])]);

    }
}
