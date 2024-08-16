<?php

namespace App\Http\Controllers\Bibliography;

use App\Http\Controllers\Controller;
use App\Http\Requests\Bibliography\AddBiblioRequest;
use App\Services\BiblioService;

class AddBiblioController extends Controller
{
    protected $biblioService;
    public function __construct(BiblioService $biblioService){
        $this->biblioService = $biblioService;
    }
    public function addBiblio(AddBiblioRequest $request)
    {
        try {

            
            BiblioService::createBiblioWithRelations($request);

            

        } catch (\Exception $e) {

        }

    }
}
