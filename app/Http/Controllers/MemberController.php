<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddMemberRequest;
use App\Http\Requests\DeleteMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use App\Models\Member;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;



class MemberController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/Login');
    }
    public function addMember(AddMemberRequest $request)
    {
        Member::addMember($request);
        return response()->json(['message' => "Member added successfully!"], 200);
    }
    public function updateMember(UpdateMemberRequest $request, $id)
    {
        $member = Member::findOrFail($id);
        $member->update($request->all());

        return response()->json(['message' => 'Member updated successfully!'], 200);
    }
    public function deleteMember(DeleteMemberRequest $request)
    {
        Member::deleteMember($request);
        return response()->json(['message' => "Member deleted successfully!"], 200);
    }
}
