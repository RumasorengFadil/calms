<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Http\Requests\Membership\CommonMemberRequest;
use App\Http\Requests\Membership\SearchMemberRequest;
use App\Models\Member;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SearchMemberController extends Controller
{
    public function searchMember(CommonMemberRequest $request)
    {
        $members = Member::searchMember($request);
        return Inertia::render('Membership/Membership', ["members" => $members]);
    }
}
