import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { memo, useEffect, useState } from "react";
import AddPatternModal from "@/Components/AddPatternModal";
import MainLayout from "@/Layouts/MainLayout";

export default memo(function CreateBibliography({}) {
    const [isVisible, setIsVisible] = useState(false);

    const setModalVisibility = (isVisible) => {
        setIsVisible(isVisible);
    };

    return (
        <MainLayout>
            <div className="flex fixed min-w-full bg-light-gray max-h-screen">
                <SidebarLayout>
                    <BibliographySidebar />
                </SidebarLayout>

                <div className="flex flex-col w-full">
                    <TopbarLayout />

                    <MainContentLayout>
                        <PageHeader>Tambah Pustaka</PageHeader>

                        <div className="bg-white">
                            <form action="">
                                <div className="flex px-10 border-y items-center py-3">
                                    <label htmlFor="title" className="basis-80">
                                        Judul
                                    </label>
                                    <span className="mx-7">:</span>
                                    <TextInput
                                        type="text"
                                        className="p-1 basis-full"
                                    />
                                </div>
                                <div className="flex px-10 border-y items-center py-3">
                                    <label
                                        htmlFor="publisher"
                                        className="basis-80"
                                    >
                                        Publisher
                                    </label>
                                    <span className="mx-7">:</span>
                                    <TextInput
                                        type="text"
                                        className="p-1 basis-full"
                                    />
                                </div>
                                <div className="flex px-10 border-y py-3">
                                    <label
                                        htmlFor="author"
                                        className="basis-80"
                                    >
                                        Author
                                    </label>
                                    <span className="mx-7">:</span>

                                    <div className="flex flex-col basis-full">
                                        <PrimaryButton className="bg-shadow-blue w-max">
                                            Tambah Penulis
                                        </PrimaryButton>
                                        <div className="border mt-5 rounded p-5 h-28 overflow-auto">
                                            <div className="flex items-center border-b p-3">
                                                <PrimaryButton className="bg-red-500 mr-5">
                                                    Hapus
                                                </PrimaryButton>
                                                Fadil Hijayat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex px-10 border-y items-center py-3">
                                    <label
                                        htmlFor="publisher"
                                        className="basis-80"
                                    >
                                        Generator kode item
                                    </label>
                                    <span className="mx-7">:</span>
                                    <div className="basis-full flex">
                                        <select className="p-1 pl-2 rounded basis-full">
                                            <option value="">
                                                -- Tentukan Pola --
                                            </option>
                                            <option value="">B00001</option>
                                        </select>
                                        <TextInput
                                            type="number"
                                            className="p-1 pl-2 mx-4 w-2/3"
                                            placeholder="Total item(s)"
                                            min={0}
                                        />
                                        <PrimaryButton
                                            type="button"
                                            onClick={() =>
                                                setModalVisibility(true)
                                            }
                                            className="bg-shadow-blue text-center w-2/3 basis-auto"
                                        >
                                            Tambah Pola Baru
                                        </PrimaryButton>
                                        <AddPatternModal
                                            show={isVisible}
                                            onClose={() =>
                                                setModalVisibility(false)
                                            }
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
});
