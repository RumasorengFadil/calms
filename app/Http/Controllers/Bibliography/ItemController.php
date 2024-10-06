<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\SearchItemRequest;
use App\Repositories\Bibliography\ItemRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ItemController extends Controller
{
    protected $itemRepository;
    public function __construct(ItemRepository $itemRepository)
    {
        $this->itemRepository = $itemRepository;
    }
    // public function search (SearchItemRequest $request){
        
    //     try {
    //         $itemCode = $request->validated()['itemCode'];
        
    //         $authors = $this->itemRepository->search($itemCode);
    
    //         return response()->json($authors);
            
    //     } catch (\Exception $e) {
    //         dd($e->getMessage());
    //         \Log::error('Failed to search author: ' . $e->getMessage());
    //         return redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'Item'])]);
    //     }
    // }
    public function search(SearchItemRequest $request)
    {
        try {
            // Data sudah tervalidasi oleh SearchBiblioRequest
            $validatedData = $request->validated();
            
            $item = $this->itemRepository->search($validatedData['itemCode']);
            
            return redirect()->back()->with('item', ['item' => $item]);

        } catch (\Exception $e) {
            // Menyimpan log error
            \Log::error('Failed to search biblios: ' . $e->getMessage());

            // Menyediakan feedback kepada pengguna
            redirect()->back()->withErrors(['error' => __('message.error.searched', ['entity' => 'Member'])]);
        }
    }
}
