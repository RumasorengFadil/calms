<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    // public function deleteMember($id)
    // {
    //     try {
    //         $this->memberService->deleteMember($id);
    //         return response()->json(['message' => 'Member deleted successfully!'], 200);
    //     } catch (ModelNotFoundException $e) {
    //         return response()->json(['error' => 'Member not found!'], 404);
    //     } catch (QueryException $e) {
    //         return response()->json(['error' => 'Failed to delete member!'], 500);
    //     }
    // }
}
