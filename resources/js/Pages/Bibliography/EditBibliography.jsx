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
                    href={route("membership.index")}
                    active={route().current("membership.index")}
                    >
                    Daftar Member
                </SidebarNavLink>
                <SidebarNavLink
                    href={route("membership.create")}
                    active={route().current("membership.create")}
                >
                    Tambah Member
                </SidebarNavLink>
                <SidebarNavLink
                    href={route("membership.edit")}
                    active={route().current("membership.edit")}
                >
                    Edit Member
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
