import CirculationSidebar from "@/Components/Sidebar/CirculationSidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";

export default function Circulation({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <CirculationSidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Peminjaman</PageHeader>
                </MainContentLayout>
            </div>
        </div>
    );
}
