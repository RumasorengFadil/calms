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
    filters,
}) {
    const { data, setData, get } = useForm({
        searchKey: filters.searchKey || "",
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
            <Head title="Home" />
            <MemberLayout
                member={auth.member}
                greeting="Selamat Datang Flaminggo ✨"
            >
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
                        <h2 className="text-xl font-semibold text-gray-800 text-center">
                            Buku Terfavorit 📚
                        </h2>
                        <Swiper data={favoriteBooks} />
                    </section>
                )}

                {biblios && (
                    <section className="flex flex-col items-center justify-center">
                        {biblios.data.length !== 0  && (
                            <Pagination
                                className="py-2 w-full bg-white mt-10 flex items-center justify-center"
                                links={biblios.links}
                                searchKey={data.searchKey}
                            />
                        )}

                        <div className="flex justify-center px-5 flex-wrap">
                            {biblios.data.map((biblio, id) => (
                                <div
                                    key={id}
                                    className="bg-white flex-auto flex items-center justify-center sm:flex-none rounded-lg cursor-pointer py-4 shadow-lg ml-4 mt-4"
                                >
                                    <Link
                                        href={route(
                                            "bibliographies.show",
                                            biblio.biblio_id
                                        )}
                                        className="overflow-hidden block w-40 px-4  h-64  text-center "
                                    >
                                        <img
                                            src={
                                                biblio.biblio_photo_path
                                                    ? `/storage/uploads/img/biblios/photo/${biblio.biblio_photo_path}`
                                                    : "/img/bibliography/biblio-default-picture.png"
                                            }
                                            className="h-40 rounded bg-gray-300 inline-block"
                                        />

                                        <h3 className="mt-4 text-xs font-semibold text-gray-800">
                                            {biblio.title}
                                        </h3>
                                        {/* <p className="text-gray-600 mt-2">
                                        Stok Buku: {book.stock}
                                    </p> */}
                                    </Link>
                                </div>
                            ))}
                            {!biblios.data.length && <h1 className="my-10">Buku tidak ditemukan!</h1>}
                        </div>

                        {biblios.data.length !==0 && (
                            <Pagination
                                className="py-2 w-full bg-white mt-4 flex items-center justify-center"
                                links={biblios.links}
                                // searchKey={data.searchKey}
                            />
                        )}
                    </section>
                )}
            </MemberLayout>
        </>
    );
}
