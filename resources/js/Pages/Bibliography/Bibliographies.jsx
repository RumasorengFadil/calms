import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Bibliographies({}) {
    const { currentRouteName } = usePage().props;
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <Link href={route("bibliographies.index")}>
                    <li
                        className={`${
                            currentRouteName === "bibliographies.index"
                                ? "bg bg-white shadow-lg text-primary"
                                : "text-white"
                        } mb-1 text-xl cursor-pointer w-64 p-2 rounded-r-full font-semibold`}
                    >
                        Daftar Pustaka
                    </li>
                </Link>
                <Link href={route("bibliography.create")}>
                    <li
                        className={`${
                            currentRouteName === "bibliographies.create"
                                ? "bg bg-white shadow-lg text-primary"
                                : "text-white"
                        } mb-1 text-xl cursor-pointer w-64 p-2 rounded-r-full font-semibold`}
                    >
                        Tambah Pustaka
                    </li>
                </Link>
                <Link href={route("bibliography.edit")}>
                    <li
                        className={`${
                            currentRouteName === ""
                                ? "bg bg-white shadow-lg text-primary"
                                : "text-white"
                        } mb-1 text-xl cursor-pointer w-64 p-2 rounded-r-full font-semibold`}
                    >
                        Edit Pustaka
                    </li>
                </Link>
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
