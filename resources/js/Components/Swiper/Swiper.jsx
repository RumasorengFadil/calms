// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperButton from "./SwiperButton";
import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function ({ data, className }) {
    const [books] = useState([
        { id: 1, title: "Buku 1", stock: 10 },
        { id: 2, title: "Buku 2", stock: 5 },
        { id: 3, title: "Buku 3", stock: 3 },
        { id: 4, title: "Buku 4", stock: 7 },
        { id: 5, title: "Buku 5", stock: 0 },
        { id: 6, title: "Buku 6", stock: 9 },
        { id: 6, title: "Buku 6", stock: 9 },
        { id: 6, title: "Buku 6", stock: 9 },
        { id: 6, title: "Buku 6", stock: 9 },
        { id: 6, title: "Buku 6", stock: 9 },
        { id: 6, title: "Buku 6", stock: 9 },
    ]);

    return (
        <div className={"container mx-auto px-4 py-10 " + className}>
            <Swiper
                // modules={[Navigation, Scrollbar, A11y]}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={2}
                slidesPerGroup={2}
                breakpoints={{
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        slidesPerGroup: 4,
                    }, // untuk layar medium
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                        slidesPerGroup: 5,
                    }, // untuk layar medium
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                        slidesPerGroup: 6,
                    }, // untuk layar besar
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                <div className="flex justify-center mt-6 space-x-4 py-5">
                    {data.length > 0 ? (
                        data.map((book, i) => (
                            <SwiperSlide key={i}>
                                <Link
                                    // key={book.id}
                                    href = {route('bibliographies.show',book.biblio_id)}
                                    className="bg-white block shadow-lg h-72 py-5 px-5 flex-1 rounded-lg text-center cursor-pointer"
                                >
                                    <img
                                        src={
                                            book.biblio_photo_path
                                                ? `/storage/uploads/img/biblios/photo/${book.biblio_photo_path}`
                                                : "/img/bibliography/biblio-default-picture.png"
                                        }
                                        className="h-40 rounded bg-gray-300 inline-block text-center"
                                    />

                                    <h3 className="mt-4 text-xs font-semibold text-gray-800">
                                        {book.title}
                                    </h3>
                                    {/* <p className="text-gray-600 mt-2">
                                        Stok Buku: {book.stock}
                                    </p> */}
                                </Link>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-gray-500 text-lg">
                            Buku tidak ditemukan.
                        </p>
                    )}
                </div>
                <SwiperButton />
            </Swiper>
        </div>
    );
}
