import Pagination from "@/Components/Pagination";
import Swiper from "@/Components/Swiper/Swiper";
import SwiperButton from "@/Components/Swiper/SwiperButton";
import MemberLayout from "@/Layouts/MemberLayout";
import toastUtils from "@/utils/toastUtils";
import { Link, Head, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Welcome({
    latestBooks,
    favoriteBooks,
    biblios,
    auth,
    laravelVersion,
    phpVersion,
}) {
    // State untuk menyimpan buku dan kata kunci pencarian
    const { data, setData, reset, get } = useForm({
        searchKey: "",
    });

    const submit = (e) => {
        e.preventDefault();

        get(route("index"), {
            onError: (errors) => {
                toastUtils.showError(errors);
            },
        });
    };
    return (
        <>
            <Head title="Welcome" />
            <MemberLayout member={auth.member}  greeting="Selamat Datang Flaminggo ✨">
                <section className="text-center mt-10">
                    <p className="mt-4 text-lg">Yuk cari bukunya...</p>
                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="Cari buku..."
                            className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={data.searchKey}
                            onChange={(e) =>
                                setData("searchKey", e.target.value)
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    submit(e);
                                }
                            }}
                        />
                    </div>
                </section>

                {latestBooks && (
                    <section>
                        <h2 className="text-xl mt-10 font-semibold text-gray-800 text-center">
                            Buku Terbaru 📚
                        </h2>
                        <Swiper data={latestBooks} />
                    </section>
                )}

                {favoriteBooks && (
                    <section>
                        <h2 className="text-xl mt-10 font-semibold text-gray-800 text-center">
                            Buku Terfavorit 📚
                        </h2>
                        <Swiper data={favoriteBooks} />
                    </section>
                )}

                {biblios && (
                    <section>
                        <div className="flex justify-center px-10 flex-wrap py-10">
                            {biblios.data.map((biblio, id) => (
                                <Link
                                    key={id}
                                    href = {route('books.show',biblio.biblio_id)}
                                    className="bg-white cursor-pointer block shadow-lg h-72 py-5 px-5 w-40 rounded-lg text-center ml-4 mt-4"
                                >
                                    <img
                                        src={
                                            biblio.biblio_photo_path
                                                ? `/storage/uploads/img/biblios/photo/${biblio.biblio_photo_path}`
                                                : "/img/bibliography/biblio-default-picture.png"
                                        }
                                        className="h-40 rounded bg-gray-300 inline-block text-center"
                                    />

                                    <h3 className="mt-4 text-xs font-semibold text-gray-800">
                                        {biblio.title}
                                    </h3>
                                    {/* <p className="text-gray-600 mt-2">
                                        Stok Buku: {book.stock}
                                    </p> */}
                                </Link>
                            ))}
                            {!biblios.data.length && "Buku tidak ditemukan!"}
                        </div>
                    </section>
                )}
            </MemberLayout>
        </>
    );
}
