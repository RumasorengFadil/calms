import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import TextInput from "@/Components/TextInput";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Bibliographies({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <BibliographySidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Pustaka</PageHeader>
                    <div className="py-5 px-10 flex items-center border-y">
                        
                        <InputLabel className="text-base">Cari</InputLabel>
                        <input className="p-1 pl-2 mx-3 w-96 rounded-lg border-r-black" type="search" name="" id="" />
                        <PrimaryButton className="px-8 py-2 text-base bg-primary">Cari</PrimaryButton>
                    </div>
                </MainContentLayout>
            </div>
        </div>
    );
}
