<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchAuthorRequest;
use App\Http\Requests\Bibliography\StoreAuthorRequest;
use App\Models\MstAuthor;
use App\Repositories\Bibliography\BiblioAuthorRepository;
use App\Repositories\Bibliography\MstAuthorRepository;
use Inertia\Inertia;
use Request;

class AuthorController extends Controller
{
    protected $mstAuthorRepository;
    protected $biblioAuthorRepository;

    public function __construct(MstAuthorRepository $mstAuthorRepository,BiblioAuthorRepository $biblioAuthorRepository)
    {
        $this->mstAuthorRepository = $mstAuthorRepository;
        $this->biblioAuthorRepository = $biblioAuthorRepository;
    }
    public function store(StoreAuthorRequest $request)
    {

        try {
            $validatedData = $request->validated();

            $author = $this->mstAuthorRepository->store($validatedData);

            return redirect()->back()->with(['message' => __('message.success.added', ['entity' => 'author']), 'author' => $author]);
            
        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to store author: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.added', ['entity' => 'author'])]);
        }
    }

    public function search (SearchAuthorRequest $request){
        
        try {
            $searchKey = $request->validated()['searchKey'];
        
            $authors = $this->mstAuthorRepository->search($searchKey);
    
            return response()->json($authors);
            
        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to search author: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'author'])]);
        }
    }
    
    public function destroy($biblioAuthor)
    {
        try {
            $this->biblioAuthorRepository->destroy($biblioAuthor);
            
            return redirect()->back()
                ->with(['message' => __('message.success.destroyed', ['entity' => 'Author'])]);

        } catch (\Exception $e) {
            \Log::error('Failed to update biblios: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.destroyed', ['entity' => 'Biblio'])]);
        }
    }
}
