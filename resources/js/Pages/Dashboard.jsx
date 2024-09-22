import PageHeader from "@/Components/PageHeader";
import SidebarNavLink from "@/Components/Sidebar/SidebarNavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <SidebarNavLink
                    href={route("dashboard.index")}
                    active={route().current("dashboard.index")}
                >
                    Dashboard
                </SidebarNavLink>
                <SidebarNavLink
                    href={route("logout")}
                >
                    Logout
                </SidebarNavLink>
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Dashboard</PageHeader>
                </MainContentLayout>
            </div>
        </div>
    );
}
