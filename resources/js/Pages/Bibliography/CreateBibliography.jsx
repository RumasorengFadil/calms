import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import { useEffect, useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import FormLayout from "@/Layouts/FormLayout";
import InputLabel from "@/Components/InputLabel";
import FormElement from "@/Components/FormElement";
import AuthorSection from "@/Components/AuthorSection";
import ItemCodePatternSection from "@/Components/ItemCodePatternSection";

export default function CreateBibliography({ itemCodePatterns }) {
    const { post, errors, data, setData } = useForm({
        itemCodePattern: "",
        authors: [],
        totalItems : ""
    });

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleAddAuthor = (author) => {
        if (!data.authors.some((existingAuthor) => existingAuthor.author_id === author.author_id)) {
            setData("authors", [...data.authors, author]);
        }
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
};
