import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { memo, useEffect, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import StorePatternModal from "@/Components/Modal/StorePatternModal";
import StoreAuthorModal from "@/Components/Modal/StoreAuthorModal";
import FormLayout from "@/Layouts/FormLayout";
import InputLabel from "@/Components/InputLabel";
import FormElement from "@/Components/FormElement";

export default memo(function CreateBibliography({ itemCodePatterns }) {
    const [isVisible, setIsVisible] = useState(false);

    const setModalVisibility = (isVisible) => {
        setIsVisible(isVisible);
    };

    const { post, errors, data, setData } = useForm({
        itemCodePatterns: "",
        authors : []
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [`${e.target.name}`]: e.target.value,
        });
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

                        <FormLayout>
                            <FormElement>
                                <InputLabel className="basis-80">
                                    Judul
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <TextInput
                                    type="text"
                                    className="p-1 basis-full"
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-80">
                                    Publisher
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <TextInput
                                    type="text"
                                    className="p-1 basis-full"
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-80">
                                    Author
                                </InputLabel>
                                <span className="mx-7">:</span>

                                <div className="flex flex-col basis-full">
                                    <PrimaryButton
                                        type="button"
                                        onClick={() => setModalVisibility(true)}
                                        className="bg-shadow-blue w-max"
                                    >
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
                            </FormElement>
                            <div className="flex px-10 border-y items-center py-3">
                                <label htmlFor="publisher" className="basis-80">
                                    Generator kode item
                                </label>
                                <span className="mx-7">:</span>
                                <div className="basis-full flex">
                                    <select
                                        name="itemCodePattern"
                                        className="p-1 pl-2 rounded basis-full"
                                    >
                                        <option value="">
                                            -- Tentukan Pola --
                                        </option>
                                        {itemCodePatterns.map((code, i) => (
                                            <option
                                                key={code.pattern_id}
                                                value=""
                                            >
                                                {code.item_code_pattern}
                                            </option>
                                        ))}
                                    </select>
                                    <TextInput
                                        type="number"
                                        className="p-1 pl-2 mx-4 w-2/3"
                                        placeholder="Total item(s)"
                                        min={0}
                                    />
                                    <PrimaryButton
                                        type="button"
                                        onClick={() => setModalVisibility(true)}
                                        className="bg-shadow-blue text-center w-2/3 basis-auto"
                                    >
                                        Tambah Pola Baru
                                    </PrimaryButton>
                                </div>
                            </div>
                        </FormLayout>
                    </MainContentLayout>
                </div>
            </div>
            <StorePatternModal
                show={isVisible}
                onClose={() => setModalVisibility(false)}
            />
            <StoreAuthorModal
                show={isVisible}
                onClose={() => setModalVisibility(false)}
            />
        </MainLayout>
    );
});
