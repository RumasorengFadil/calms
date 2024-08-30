import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import SearchBar from "@/Components/SearchBar";
import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import TextInput from "@/Components/TextInput";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Bibliographies({}) {
    return (
        <div className="flex fixed min-w-full bg-light-gray max-h-screen">
            <SidebarLayout>
                <BibliographySidebar />
            </SidebarLayout>

            <div className="flex flex-col w-full">
                <TopbarLayout />

                <MainContentLayout>
                    <PageHeader> Pustaka </PageHeader>
                    <SearchBar />

                    <div className="w-full bg-white">
                        <div id="header" className="flex border-y py-3 px-10">
                            <div className="basis-1/5 text-ceter">Pilih</div>
                            <div className="basis-full">Judul</div>
                            <div className="basis-1/3">Penerbit</div>
                            <div className="basis-1/3">Kode Buku</div>
                            <div className="basis-1/3">Aksi</div>
                        </div>
                        <div id="body" className="flex border-y py-3 px-10">
                            <div className="basis-1/5 flex items-center justify-start">
                                <TextInput type="checkbox" />
                            </div>
                            <div className="basis-full">
                                <div className="flex">
                                    <img
                                        className=""
                                        src="/img/bibliography/biblio-default-picture.png"
                                        alt=""
                                    />
                                    <div className="p-4">
                                        <div className="mb-2">
                                            PANGERAN KODOK DAN SERIGALA
                                        </div>
                                        <div className="text-gray-400">
                                            JURAGAN MUDA
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/3">GRAMEDIA</div>
                            <div className="basis-1/3">SI00027</div>
                            <div className="basis-1/3">
                                <div className="flex h-full items-end">
                                    <form action="" method="get">
                                        <TextInput
                                            className="text-primary underline cursor-pointer"
                                            type="submit"
                                            value="edit"
                                        />
                                    </form>
                                    <form action="" method="delete">
                                        <TextInput
                                            className="text-red-600 underline cursor-pointer mx-4"
                                            type="submit"
                                            value="hapus"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainContentLayout>
            </div>
        </div>
    );
}
