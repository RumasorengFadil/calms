<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchLanguageRequest;
use App\Repositories\Bibliography\MstLanguageRepository;

class LanguageController extends Controller
{
    protected $mstLanguageRepository;

    public function __construct(MstLanguageRepository $mstLanguageRepository)
    {
        $this->mstLanguageRepository = $mstLanguageRepository;
    }
    public function search(SearchLanguageRequest $request)
    {
        try {
            $searchKey = $request->validated("searchKey");

            $languages = $this->mstLanguageRepository->search($searchKey);

            return response()->json($languages);

        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to search language: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'language'])]);
        }
    }
}
