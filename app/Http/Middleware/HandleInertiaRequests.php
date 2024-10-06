<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Route;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $currentRouteName = Route::currentRouteName();
        $baseRouteName = explode('.', $currentRouteName)[0];
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'currentRouteName' => $currentRouteName,
            'baseRouteName' => $baseRouteName,
            'flash' => [
                'message' => fn() => $request->session()->get('message'),
                'error' => fn() => $request->session()->get('error'),
                'author' => fn() => $request->session()->get('author'),
                'authors' => fn() => $request->session()->get('authors'),
                'members' => fn() => $request->session()->get('members'),
                'item' => fn() => $request->session()->get('item'),
            ],
        ];
    }
}
