<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\AddItemCodePatternRequest;
use App\Models\ItemCodePattern;
use App\Repositories\Bibliography\ItemCodePatternRepository;
use Inertia\Inertia;

class ItemCodePatternController extends Controller
{
    protected $itemCodePatternRepository;
    public function __construct(ItemCodePatternRepository $itemCodePatternRepository)
    {
        $this->itemCodePatternRepository = $itemCodePatternRepository;
    }
    public function store(AddItemCodePatternRequest $request)
    {

        $validatedData = $request->validated();

        $this->itemCodePatternRepository->store($validatedData);

        return redirect()->route('bibliographies.create')->with(['message' => __('message.success.stored', ['entity' => 'Item code pattern'])]);
    }
}
