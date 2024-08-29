<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BibliographyController extends Controller
{
    public function index()
    {
        return Inertia::render('Bibliography/Bibliographies');
    }
}
