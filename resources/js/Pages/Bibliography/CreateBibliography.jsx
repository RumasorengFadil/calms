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
import AuthorSection from "@/Components/AuthorSection";
import ItemCodePatternSection from "@/Components/ItemCodePatternSection";

export default memo(function CreateBibliography({ itemCodePatterns }) {
    const [isVisible, setIsVisible] = useState(false);

    const setModalVisibility = (isVisible) => {
        setIsVisible(isVisible);
    };

    const { post, errors, data, setData } = useForm({
        itemCodePattern: "",
        authors: [],
        totalItems : ""
    });

    const handleChange = (e) => {
        console.log(e.target.value);
        setData({
            ...data,
            [`${e.target.name}`]: e.target.value,
        });
    };

    const handleAddAuthor = (author) => {
        setData("authors", [...data.authors, author]);
    };

    const handleDeleteAuthor = (id) => {
        const authors = data.authors.filter((author) => author.author_id !== id);

        setData("authors", authors);
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

                                <AuthorSection authors={data.authors} onAdded ={handleAddAuthor} onDelete={handleDeleteAuthor} />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-80">
                                    Generator kode item
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <ItemCodePatternSection itemCodePatterns = {itemCodePatterns} onChange={handleChange} data = {data} />
                            </FormElement>
                        </FormLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
});
