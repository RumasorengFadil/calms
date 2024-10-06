<?php

namespace App\Http\Middleware;

use App\Models\Member;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BreadcrumbsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $breadcrumbs = [];
        // Dapatkan nama route saat ini
        $routeName = $request->route()->getName();
        switch ($routeName) {
            case 'bibliographies.index':
                $breadcrumbs[] = ['name' => 'bibliographies.index', 'label' => 'Pustaka'];
                break;

            case 'bibliographies.edit':
                $biblio = $request->route('biblioId');
                $breadcrumbs[] = ['name' => 'bibliographies.index', 'label' => 'Pustaka'];
                $breadcrumbs[] = ['name' => 'bibliographies.edit', 'label' => 'Edit Pustaka', 'params' => $biblio->biblio_id];
                break;

            // Add more cases as needed
            case 'membership.index':
                $breadcrumbs[] = ['name' => 'membership.index', 'label' => 'Keanggotaan'];
                break;

            case 'membership.edit':
                $memberId = $request->route('memberId');
                $member = Member::find($memberId);
                $breadcrumbs[] = ['name' => 'membership.index', 'label' => 'Keanggotaan'];
                $breadcrumbs[] = ['name' => 'membership.edit', 'label' => 'Edit Anggota', 'params' => $member->member_id];
                break;

            case 'circulation.index':
                $breadcrumbs[] = ['name' => 'circulation.index', 'label' => 'Peminjaman'];
                break;
                
            case 'circulation.create':
                $memberId = $request->route('memberId');
                $member = Member::find($memberId);
                $breadcrumbs[] = ['name' => 'circulation.index', 'label' => 'Peminjaman'];
                $breadcrumbs[] = ['name' => 'circulation.create', 'label' => 'Tambah Peminjaman', 'params' => $member?->member_id];
                break;
        }

        // Membagikan breadcrumbs ke semua view
        inertia()->share('breadcrumbs', $breadcrumbs);
        return $next($request);
    }
}
