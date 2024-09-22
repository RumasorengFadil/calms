<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchPlaceRequest;
use App\Repositories\Bibliography\MstPlaceRepository;
use Illuminate\Http\Request;

class PlaceController extends Controller
{
    protected $mstPlaceRepository;

    public function __construct(MstPlaceRepository $mstPlaceRepository)
    {
        $this->mstPlaceRepository = $mstPlaceRepository;
    }
    public function search(SearchPlaceRequest $request)
    {
        try {
            $searchKey = $request->validated("searchKey");

            $authors = $this->mstPlaceRepository->search($searchKey);

            return response()->json($authors);

        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to search place: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'place'])]);
        }
    }
}
