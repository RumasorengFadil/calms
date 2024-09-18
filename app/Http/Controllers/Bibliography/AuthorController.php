<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchAuthorRequest;
use App\Http\Requests\Bibliography\StoreAuthorRequest;
use App\Models\MstAuthor;
use App\Repositories\Bibliography\MstAuthorRepository;
use Inertia\Inertia;
use Request;

class AuthorController extends Controller
{
    protected $mstAuthorRepository;

    public function __construct(MstAuthorRepository $mstAuthorRepository)
    {
        $this->mstAuthorRepository = $mstAuthorRepository;
    }
    public function store(StoreAuthorRequest $request)
    {

        try {
            $validatedData = $request->validated();

            $author = $this->mstAuthorRepository->store($validatedData);

            return redirect()->route('bibliographies.create')->with(['message' => __('message.success.added', ['entity' => 'author']), 'author' => $author]);
            
        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to store author: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.added', ['entity' => 'author'])]);
        }
    }

    public function search (SearchAuthorRequest $request){
        
        $authorSearchKey = $request->validated()['authorSearchKey'];
        
        $authors = $this->mstAuthorRepository->search($authorSearchKey);

        return response()->json($authors);

    }
}
