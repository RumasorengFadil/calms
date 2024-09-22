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
import PrimaryButton from "@/Components/PrimaryButton";
import toastUtils from "@/utils/toastUtils";
import InputError from "@/Components/InputError";
import InputGroup from "@/Components/InputGroup";

export default function CreateBibliography({ itemCodePatterns }) {
    const { post, errors, data, setData, reset } = useForm({
        title: "",
        edition: "",
        isbnIssn: "",
        publishYear: "",
        publisherName: "",
        collation: "",
        placeName: "",
        category: "",
        biblioPhoto: null,
        itemCodePattern: "",
        abstract: "",
        authors: [],
        totalItems: "",
        languageName: "",
    });
    // const [imagePreview, setImagePreview] = useState(null); // State untuk menyimpan Data URL

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0]; // Ambil file pertama dari input
    //     if (file) {
    //         const reader = new FileReader();

    //         reader.onloadend = () => {
    //             setImagePreview(reader.result); // Simpan Data URL di state untuk preview
    //         };

    //         reader.readAsDataURL(file); // Baca file sebagai Data URL
    //     }
    //     setData("biblioPhoto", file);
    // };

    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData,
            [e.target.name]:
                e.target.type === "file"
                    ? !e.target.files[0] && prevData.biblioPhoto
                        ? prevData.biblioPhoto
                        : e.target.files[0]
                    : e.target.value,
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

    const submit = function () {
        console.log(data.biblioPhoto);

        post(route("bibliographies.store"), {
            onSuccess: (response) => {
                console.log(response);
                toastUtils.showSuccess(response.props.flash);
                reset();
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
                        <PageHeader>Tambah Pustaka</PageHeader>

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
                                        name="publisherName"
                                        show="publisher_name"
                                    />
                                    <InputError message={errors.publisherName} />
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
                                        value={data.abstract}
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
                                    className="mr-7 rounded"
                                    src={
                                        "/img/bibliography/biblio-default-picture.png"
                                    }
                                ></img>
                                <InputGroup className="">
                                    <div className="flex items-center">
                                        <input
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            name="biblioPhoto"
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="text"
                                            className="border focus:border-gray-300 focus:ring-0 cursor-auto border-gray-300 rounded-md shadow-sm p-1 px-2 w-full"
                                            placeholder="Pilih Berkas"
                                            value={
                                                data.biblioPhoto?.name
                                                    ? data.biblioPhoto?.name
                                                    : ""
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
                            <FormElement className="bg-light-gray py-6 justify-end">
                                {/* <PrimaryButton className="cursor-pointer mx-1 bg-shadow-blue hover:bg-gray-700">Kembali</PrimaryButton> */}
                                <PrimaryButton
                                    type="button"
                                    onClick={submit}
                                    className="cursor-pointer mx-1 bg-secondary hover:bg-gray-700"
                                >
                                    Simpan
                                </PrimaryButton>
                            </FormElement>
                        </FormLayout>
                    </MainContentLayout>
                </div>
            </div>
        </MainLayout>
    );
}
