<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\StoreAuthorRequest;
use App\Models\MstAuthor;
use App\Repositories\Bibliography\MstAuthorRepository;
use Inertia\Inertia;

class AuthorController extends Controller
{
    protected $mstAuhorRepository;

    public function __construct(MstAuthorRepository $mstAuthorRepository)
    {
        $this->mstAuhorRepository = $mstAuthorRepository;
    }
    public function store(StoreAuthorRequest $request)
    {

        try {
            $validatedData = $request->validated();

            $this->mstAuhorRepository->store($validatedData);

            return redirect()->route('bibliographies.create')->with(["message" => __("message.success.added", ["entity" => "author"])]);
        } catch (\Exception $e) {
            dd($e->getMessage());
            \Log::error('Failed to store author: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => __('message.error.stored', ['entity' => 'author'])]);
        }
    }
}
