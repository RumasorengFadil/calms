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

    public function create()
    {
        return Inertia::render('Bibliography/CreateBibliography');
    }
    public function edit()
    {
        return Inertia::render('Bibliography/EditBibliography');
    }
}
