<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\AddAuthorRequest;
use App\Models\MstAuthor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddAuthorController extends Controller
{
    public function addAuthor(AddAuthorRequest $request){
        $validatedData = $request->validated();

        // foreach ($validatedData['authors'] as $author) {
        // }
        MstAuthor::addAuthor($validatedData);

        return Inertia::render("Bibliography/Bibliography", ["message" => __("message.success.added", ["entity" => "author"])]);
    }
}
