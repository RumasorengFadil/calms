import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <a href="">
                    <li className="bg-white mb-1 shadow-lg text-xl cursor-pointer w-64 p-2 rounded-r-full font-semibold text-primary">
                        Tambah anggota
                    </li>
                </a>
                <a href="">
                    <li className="text-xl mb-1 cursor-pointer w-64 p-2 rounded-r-full font-semibold text-white">
                    Daftar anggota
                    </li>
                </a>
                <a href="">
                    <li className="mb-1 text-xl cursor-pointer w-64 p-2 rounded-r-full font-semibold text-white">
                        Non-aktifkan anggota
                    </li>
                </a>
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
