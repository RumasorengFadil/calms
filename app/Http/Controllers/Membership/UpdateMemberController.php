<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateMemberRequest;
use App\Models\Member;
use Inertia\Inertia;
use Inertia\Response;

class UpdateMemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/UpdateMember');
    }
    public function updateMember(UpdateMemberRequest $request, $id)
    {
        $member = Member::findOrFail($id);
        $member->update($request->all());

        return response()->json(['message' => 'Member updated successfully!'], 200);
    }
}
