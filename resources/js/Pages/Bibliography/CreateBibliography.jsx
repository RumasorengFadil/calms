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
import Autocomplete from "@/Components/Autocomplete";

export default function CreateBibliography({ itemCodePatterns }) {
    const { post, errors, data, setData } = useForm({
        title: "",
        edition: "",
        isbnIssn: "",
        publishYear: "",
        publisher: "",
        collation: "",
        placeName: "",
        category: "",
        biblioPhoto: "",
        itemCodePattern: "",
        authors: [],
        totalItems: "",
    });

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleAddAuthor = (author) => {
        if (
            !data.authors.some(
                (existingAuthor) =>
                    existingAuthor.author_id === author.author_id
            )
        ) {
            setData("authors", [...data.authors, author]);
        }
    };

    const handleDeleteAuthor = (id) => {
        const authors = data.authors.filter(
            (author) => author.author_id !== id
        );

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
                                <InputLabel className="basis-52">
                                    Judul
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <TextInput
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                    type="text"
                                    className="p-1 pl-2 flex-1"
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Penerbit
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <TextInput
                                    name="publisher"
                                    onChange={handleChange}
                                    value={data.publisher}
                                    type="text"
                                    className="p-1 pl-2 flex-1"
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Penulis
                                </InputLabel>
                                <span className="mx-7">:</span>

                                <AuthorSection
                                    authors={data.authors}
                                    onAdded={handleAddAuthor}
                                    onDelete={handleDeleteAuthor}
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Generator kode item
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <ItemCodePatternSection
                                    itemCodePatterns={itemCodePatterns}
                                    onChange={handleChange}
                                    data={data}
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Edisi
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <TextInput
                                    name="edition"
                                    onChange={handleChange}
                                    value={data.edition}
                                    type="text"
                                    className="p-1 pl-2 flex-1"
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Tahun Terbit
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <TextInput
                                    name="publishYear"
                                    onChange={handleChange}
                                    value={data.publishYear}
                                    type="number"
                                    className="p-1 pl-2 basis-56"
                                />
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Tempat Terbit
                                </InputLabel>
                                <span className="mx-7">:</span>
                                {/* <TextInput
                                    name="placeName"
                                    onChange={handleChange}
                                    value={data.placeName}
                                    type="text"
                                    className="p-1 pl-2 basis-56"
                                /> */}
                                <Autocomplete
                                    value={data.authorName}
                                    onChange={() => {}}
                                    name={"author.search"}
                                    className="w-56"
                                    placeholder="exp : Indonesia"
                                />
                            </FormElement>
                        </FormLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
