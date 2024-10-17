<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {

        if (Auth::guard('web')->check()) {
            return redirect(RouteServiceProvider::HOME);
        } elseif (Auth::guard('member')->check()) {
            return redirect(RouteServiceProvider::USER_HOME);
        }

        return $next($request);
    }
    // public function handle(Request $request, Closure $next, string ...$guards): Response
    // {
    //     $guards = empty($guards) ? [null] : $guards;

    //     foreach ($guards as $guard) {
    //         if (Auth::guard($guard)->check()) {
    //              // Redirect based on guard type
    //              if ($guard === 'web') {
    //                 return redirect(RouteServiceProvider::HOME);
    //             } else{
    //                 return redirect(RouteServiceProvider::USER_HOME);
    //             }
    //         }
    //     }

    //     return $next($request);
    // }
}
