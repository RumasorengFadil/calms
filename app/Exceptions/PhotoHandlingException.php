<?php

namespace App\Exceptions;

use Exception;

class PhotoHandlingException extends Exception
{
    public function report()
    {
        \Log::error("Photo handling error: " . $this->getMessage());
    }

    public function render($request)
    {
        return redirect()->back()->withErrors(['error' => 'Failed to process member photo.']);
    }


    
}
