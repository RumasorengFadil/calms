<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\CommonMemberRequest;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MemberActivationController extends Controller
{
    public function activateMember(CommonMemberRequest $request):Response{
        Member::activate($request);

        return Inertia::render("Membership/DeactivateMember", ["message" => "Member activation successfully!"]);
    }
}
