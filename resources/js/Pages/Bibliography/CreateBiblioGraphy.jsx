import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CreateBibliography({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray min-h-screen">
            <SidebarLayout>
                <BibliographySidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader>Tambah Pustaka</PageHeader>

                    <div className="bg-white px-10">
                        <form action="">
                            <div className="flex items-center py-3">
                                <label htmlFor="title" className="basis-80">Judul</label>
                                <span className="mx-7">:</span>
                                <TextInput type="text" className="p-1 basis-full"  />
                            </div>
                            <div className="flex items-center py-3">
                                <label htmlFor="publisher" className="basis-80">Publisher</label>
                                <span className="mx-7">:</span>
                                <TextInput type="text" className="p-1 basis-full"  />
                            </div>
                            <div className="flex items-center py-3">
                                <label htmlFor="author" className="basis-80">Author</label>
                                <span className="mx-7">:</span>

                                <div className="flex flex-col basis-full">
                                    <PrimaryButton className="bg-gray-400 w-max">Tambah Penulis</PrimaryButton>
                                    <div className="border h-full min-h-40">
                                        {/* <div>dsdsd</div> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </MainContentLayout>
            </div>
        </div>
    );
}
