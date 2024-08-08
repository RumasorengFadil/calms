<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\Membership\CommonMemberRequest;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DeleteMemberController extends Controller
{
    public function deleteMember(CommonMemberRequest $request):Response
    {
        Member::deleteMember($request);

        return Inertia::render("Membership/UpdateMember", ["message" => "Member deleted successfully!"]);
        // Cara lama ketika membangun web dengan laravel tradisional;
        // return response()->json(['message' => "Member deleted successfully!"], 200);
    }
}
