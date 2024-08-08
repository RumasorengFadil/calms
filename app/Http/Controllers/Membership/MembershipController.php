<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MembershipController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/Membership');
    }
}
