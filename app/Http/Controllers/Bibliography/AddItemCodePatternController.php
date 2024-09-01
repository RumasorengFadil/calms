<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\AddItemCodePatternRequest;
use App\Models\ItemCodePattern;
use Inertia\Inertia;

class AddItemCodePatternController extends Controller
{
    public function addItemCodePattern(AddItemCodePatternRequest $request){
        ItemCodePattern::addPattern($request);

        return Inertia::render("Bibliography/Bibliography", ["message" => __("message.success.added", ["entity" => "Item code pattern"])]);
    }
}
