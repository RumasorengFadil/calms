<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\AddMemberRequest;
use App\Models\Member;
use Inertia\Inertia;
use Inertia\Response;

class AddMemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/AddMember');
    }
    public function addMember(AddMemberRequest $request):Response
    {
        Member::addMember($request);
        return Inertia::render("Membership/Membership", ["message" => "Member Added successfully!"]);
    }
}
