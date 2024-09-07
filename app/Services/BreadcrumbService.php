<?php

class BreadcrumbService
{
    public static function generateBreadcrumbs($routeName, $params = [])
    {
        $breadcrumbs = [];

        switch ($routeName) {
            case 'bibliographies.index':
                $breadcrumbs[] = ['name' => 'bibliographies.index', 'label' => 'Daftar Pustaka'];
                break;

            case 'bibliographies.edit':
                $breadcrumbs[] = ['name' => 'bibliographies.index', 'label' => 'Daftar Pustaka'];
                $breadcrumbs[] = ['name' => 'bibliographies.edit', 'label' => 'Edit Pustaka', 'params' => $params];
                break;

            // Add more cases as needed
        }

        return $breadcrumbs;
    }
}
