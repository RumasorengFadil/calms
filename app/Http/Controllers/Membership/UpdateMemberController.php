<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\UpdateMemberRequest;
use App\Models\Member;
use Inertia\Inertia;
use Inertia\Response;

class UpdateMemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/UpdateMember');
    }
    public function updateMember(UpdateMemberRequest $request):Response
    {
        Member::updateMember($request);

        return Inertia::render("Membership/UpdateMember", ["message" => "Member updated successfully!"]);
    }
}
