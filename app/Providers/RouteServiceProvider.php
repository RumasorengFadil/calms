<?php

namespace App\Providers;

use App\Models\Biblio;
use App\Models\BiblioAuthor;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/dashboard';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
        
        Route::model('biblioId', Biblio::class);
        Route::model('authorId', BiblioAuthor::class);

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(function () {
                    require base_path('routes/web.php');
                    require base_path('routes/dashboard.php');
                    require base_path('routes/bibliography.php');
                    require base_path('routes/circulation.php');
                    require base_path('routes/membership.php');
                });
        });
    }
}
