import BibliographySidebar from "@/Components/Sidebar/BibliographySidebar";
import MainContentLayout from "@/Layouts/MainContentLayout";
import SidebarLayout from "@/Layouts/SidebarLayout";
import TopbarLayout from "@/Layouts/TopbarLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import PageHeader from "@/Components/PageHeader";
import TextInput from "@/Components/TextInput";
import FormLayout from "@/Layouts/FormLayout";
import InputLabel from "@/Components/InputLabel";
import FormElement from "@/Components/FormElement";
import AuthorSection from "@/Components/AuthorSection";
import ItemCodePatternSection from "@/Components/ItemCodePatternSection";
import Autocomplete from "@/Components/Autocomplete";
import PrimaryButton from "@/Components/PrimaryButton";
import toastUtils from "@/utils/toastUtils";
import InputError from "@/Components/InputError";
import InputGroup from "@/Components/InputGroup";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs ";
import MainLayout from "@/Layouts/MainLayout";
import { useState } from "react";
import { useImagePreview } from "@/hooks/useImagePreview";
import FormActions from "@/Components/Form/FormActions";

export default function EditBibliography({
    biblio,
    itemCodePatterns,
    breadcrumbs,
}) {
    const {
        post,
        delete: destroy,
        errors,
        data,
        setData,
        reset,
    } = useForm({
        title: biblio.title,
        edition: biblio.edition,
        isbnIssn: biblio.isbn_issn,
        publishYear: biblio.publish_year,
        publisherName: biblio.publisher.publisher_name,
        collation: biblio.collation,
        placeName: biblio.place.place_name,
        category: biblio.category,
        biblioPhoto: null,
        itemCodePattern: biblio.itemCodePattern,
        abstract: biblio.abstract,
        authors: biblio.authors.map(({ author }) => author),
        totalItems: "",
        languageName: biblio.language.language_name,
    });
    const { imagePreview, handleFileChange } = useImagePreview(); // State untuk menyimpan Data URL

    const handleChange = (e) => {
        // console.log(e.target.files[0]);
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
        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            const authors = data.authors.filter(
                (author) => author.author_id !== id
            );

            setData("authors", authors);

            destroy(route("authors.destroy", id), {
                onSuccess: (response) => {
                    console.log(response);
                    toastUtils.showSuccess(response.props.flash);
                },
                onError: (errors) => {
                    toastUtils.showError(errors);
                },
            });
        }
    };

    const submit = function () {
        console.log(biblio);
        console.log(data);
        post(route("bibliographies.update", biblio.biblio_id), {
            onSuccess: (response) => {
                toastUtils.showSuccess(response.props.flash);
            },
            onError: (errors) => {
                toastUtils.showError(errors);
            },
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
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        <FormLayout>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Judul
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="flex-1">
                                    <TextInput
                                        name="title"
                                        value={data.title}
                                        onChange={handleChange}
                                        type="text"
                                        className="p-1 px-2 w-full"
                                        message={errors.title}
                                    />
                                    <InputError message={errors.title} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Penerbit
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="flex-1">
                                    <Autocomplete
                                        value={data.publisherName}
                                        onChange={handleChange}
                                        route={route("publishers.search")}
                                        className="w-56 px-2"
                                        placeholder=""
                                        name="publisherName"
                                        show="publisher_name"
                                    />
                                    <InputError
                                        message={errors.publisherName}
                                    />
                                </InputGroup>
                            </FormElement>
                            <FormElement className="items-start">
                                <InputLabel className="basis-52">
                                    Penulis
                                </InputLabel>
                                <span className="mx-7">:</span>

                                <InputGroup className="flex-1">
                                    <AuthorSection
                                        authors={data.authors}
                                        onAdded={handleAddAuthor}
                                        onDelete={handleDeleteAuthor}
                                    />
                                    <InputError message={errors.authors} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Generator kode item
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="flex-1">
                                    <ItemCodePatternSection
                                        itemCodePatterns={itemCodePatterns}
                                        onChange={handleChange}
                                        data={data}
                                    />
                                    <InputError
                                        message={errors.itemCodePattern}
                                    />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Edisi
                                </InputLabel>
                                <span className="mx-7">:</span>

                                <InputGroup className="flex-1">
                                    <TextInput
                                        name="edition"
                                        onChange={handleChange}
                                        value={data.edition}
                                        type="text"
                                        className="p-1 px-2 w-full"
                                    />
                                    <InputError message={errors.edition} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Tahun Terbit
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="basis-56">
                                    <TextInput
                                        name="publishYear"
                                        onChange={handleChange}
                                        value={data.publishYear}
                                        type="number"
                                        className="p-1 px-2 w-full"
                                    />
                                    <InputError message={errors.publishYear} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Tempat Terbit
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="basis-52">
                                    <Autocomplete
                                        value={data.placeName}
                                        onChange={handleChange}
                                        route={route("places.search")}
                                        className="w-full"
                                        placeholder="exp : Indonesia"
                                        name="placeName"
                                        show="place_name"
                                    />
                                    <InputError message={errors.placeName} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Kolasi
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="basis-96">
                                    <TextInput
                                        name="collation"
                                        onChange={handleChange}
                                        value={data.collation}
                                        type="text"
                                        className="p-1 px-2 w-full"
                                    />
                                    <InputError message={errors.collation} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    ISBN/ISSN
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="basis-96">
                                    <TextInput
                                        name="isbnIssn"
                                        onChange={handleChange}
                                        value={data.isbnIssn}
                                        type="text"
                                        className="p-1 px-2 w-full"
                                    />
                                    <InputError message={errors.isbnIssn} />
                                </InputGroup>
                            </FormElement>
                            <FormElement className="items-start">
                                <InputLabel className="basis-52">
                                    Abstrak
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="flex-1">
                                    <textarea
                                        name="abstract"
                                        onChange={handleChange}
                                        value={
                                            data.abstract ? data.abstract : ""
                                        }
                                        type="text"
                                        className="p-1 px-2 min-h-24 max-h-40 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    />
                                    <InputError message={errors.abstract} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Kategori
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="flex-1">
                                    <TextInput
                                        name="category"
                                        onChange={handleChange}
                                        value={data.category}
                                        type="text"
                                        className="p-1 px-2 w-full"
                                    />

                                    <InputError message={errors.category} />
                                </InputGroup>
                            </FormElement>
                            <FormElement>
                                <InputLabel className="basis-52">
                                    Bahasa
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <InputGroup className="basis-56">
                                    <Autocomplete
                                        value={data.languageName}
                                        onChange={handleChange}
                                        route={route("languages.search")}
                                        className="w-full"
                                        placeholder="exp : Idn"
                                        name="languageName"
                                        show="language_name"
                                    />
                                    <InputError message={errors.languageName} />
                                </InputGroup>
                            </FormElement>
                            <FormElement className="items-start">
                                <InputLabel className="basis-52">
                                    Gambar
                                </InputLabel>
                                <span className="mx-7">:</span>
                                <img
                                    className="mr-7 rounded w-28 h-40"
                                    src={
                                        imagePreview
                                            ? imagePreview
                                            : `/storage/uploads/img/biblios/photo/${biblio.biblio_photo_path}`
                                    }
                                ></img>
                                <InputGroup className="">
                                    <div className="flex items-center">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            name="biblioPhoto"
                                            onChange={(e) =>
                                                handleFileChange(e, (file) =>
                                                    setData("biblioPhoto", file)
                                                )
                                            }
                                        />

                                        <input
                                            type="text"
                                            className="border focus:border-gray-300 focus:ring-0 cursor-auto border-gray-300 rounded-md shadow-sm p-1 px-2 w-full"
                                            placeholder="Pilih Berkas"
                                            value={
                                                imagePreview ? imagePreview : ""
                                            }
                                            readOnly
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="cursor-pointer mx-2 bg-shadow-blue text-white p-1 px-4 rounded-md shadow-sm hover:bg-gray-700 transition ease-in-out duration-150"
                                        >
                                            Browse
                                        </label>
                                    </div>
                                    <InputError message={errors.biblioPhoto} />
                                </InputGroup>
                            </FormElement>
                            
                            <FormActions 
                                onBack={(e) => {
                                    e.preventDefault();
                                    window.history.back();
                                }}
                                onSave = {submit}
                            />
                        </FormLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
