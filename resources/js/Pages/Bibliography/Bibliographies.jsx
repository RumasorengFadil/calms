import NavLink from "@/Components/NavLink";
import SidebarNavGroup from "@/Components/Sidebar/SidebarNavGroup ";
import SidebarNavLink from "@/Components/Sidebar/SidebarNavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Bibliographies({}) {
    const bibliographyLinks = [
        { name: "bibliographies.index", label: "Daftar Pustaka" },
        { name: "bibliographies.create", label: "Tambah Pustaka" },
        { name: "bibliographies.edit", label: "Edit Pustaka" }
    ];

    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <SidebarNavGroup links={bibliographyLinks} />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <h1 className="text-center mt-32">Daftar Pustaka</h1>
                </MainContentLayout>
            </div>
        </div>
    );
}
