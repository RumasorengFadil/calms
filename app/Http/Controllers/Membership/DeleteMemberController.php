<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeleteMemberRequest;
use App\Models\Member;
use Illuminate\Http\Request;

class DeleteMemberController extends Controller
{
    public function deleteMember(DeleteMemberRequest $request)
    {
        Member::deleteMember($request);
        return response()->json(['message' => "Member deleted successfully!"], 200);
    }
}
