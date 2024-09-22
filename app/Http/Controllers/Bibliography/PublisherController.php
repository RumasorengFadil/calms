<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchPublisherRequest;
use App\Repositories\Bibliography\MstPublisherRepository;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    protected $mstPublisherRepository;

    public function __construct(MstPublisherRepository $mstPublisherRepository)
    {
        $this->mstPublisherRepository = $mstPublisherRepository;
    }
    public function search(SearchPublisherRequest $request)
    {
        try {
            $searchKey = $request->validated("searchKey");

            $authors = $this->mstPublisherRepository->search($searchKey);

            return response()->json($authors);

        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to search place: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'place'])]);
        }
    }
}
