<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\StoreItemCodePatternRequest;
use App\Repositories\Bibliography\ItemCodePatternRepository;

class ItemCodePatternController extends Controller
{
    protected $itemCodePatternRepository;
    public function __construct(ItemCodePatternRepository $itemCodePatternRepository)
    {
        $this->itemCodePatternRepository = $itemCodePatternRepository;
    }
    public function store(StoreItemCodePatternRequest $request)
    {
        try {
            // dd("hallo");
            $validatedData = $request->validated();

            $this->itemCodePatternRepository->store($validatedData);

            return redirect()->route('bibliographies.create')->with(['message' => __('message.success.stored', ['entity' => 'Item code pattern'])]);
        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to store item code pattern: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'Item code pattern'])]);
        }
    }
}
