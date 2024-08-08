<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MembershipController extends Controller
{
    public function create(): Response
    {
        $members = Member::paginate(10);
        return Inertia::render('Membership/Membership', ["members" => $members]);
    }
}
