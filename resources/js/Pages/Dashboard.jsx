import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavbarLayout from "@/Layouts/NavbarLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <div className="flex">
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

            
        </div>
    );
}
