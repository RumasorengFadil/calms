<?php

namespace App\Http\Controllers\Membership;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class Membership extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Membership/Membership');
    }
}
