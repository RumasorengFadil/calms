import SidebarNavLink from "@/Components/SidebarNavLink";
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
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <h1 className="text-center mt-32">Dashboard</h1>
                </MainContentLayout>
            </div>
        </div>
    );
}
