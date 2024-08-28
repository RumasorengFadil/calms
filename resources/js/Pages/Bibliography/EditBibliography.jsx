import SidebarNavLink from "@/Components/Sidebar/SidebarNavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function EditBibliography({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <SidebarNavLink
                    href={route("bibliographies.index")}
                    active={route().current("bibliographies.index")}
                    >
                    Daftar Pustaka
                </SidebarNavLink>
                <SidebarNavLink
                    href={route("bibliographies.create")}
                    active={route().current("bibliographies.create")}
                >
                    Tambah Pustaka
                </SidebarNavLink>
                <SidebarNavLink
                    href={route("bibliographies.edit")}
                    active={route().current("bibliographies.edit")}
                >
                    Edit Pustaka
                </SidebarNavLink>
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <h1 className="text-center mt-32">Edit Pustaka</h1>
                </MainContentLayout>
            </div>
        </div>
    );
}
