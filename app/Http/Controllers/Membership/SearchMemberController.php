<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Http\Requests\UpdateMemberRequest;
use Illuminate\Http\Request;

class SearchMemberController extends Controller
{
    public function searchMember(SearchMemberRequest $request)
    {
        // $member = Member::findOrFail($id);
        // $member->update($request->all());

        // return response()->json(['message' => 'Member updated successfully!'], 200);
    }
}
