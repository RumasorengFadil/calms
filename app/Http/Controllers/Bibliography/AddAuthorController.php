<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\CreateBiblioRequest;
use App\Models\MstAuthor;
use Inertia\Inertia;

class AddAuthorController extends Controller
{
    public function addAuthor(CreateBiblioRequest $request){
        $validatedData = $request->validated();

        MstAuthor::addAuthor($validatedData);

        return Inertia::render("Bibliography/Bibliography", ["message" => __("message.success.added", ["entity" => "author"])]);
    }
}
