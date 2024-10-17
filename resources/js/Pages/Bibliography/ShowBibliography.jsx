import MemberLayout from "@/Layouts/MemberLayout";
import { memo } from "react";

const BookDetail = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Back Button */}
            <div className="p-5">
                <a href="/" className="text-teal-600">Kembali</a>
            </div>

            {/* Book Detail */}
            <div className="bg-white shadow-md max-w-4xl mx-auto p-16 rounded-lg">
                <div className="">
                    {/* Book Info */}
                    <div className="flex flex-col-reverse sm:flex-row">
                        <div className="flex-1">
                            <div class="flex mb-2">
                                <strong class="w-32">Judul</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">Aku Kamu dan Dia</span>
                            </div>
                            <div class="flex mb-2">
                                <strong class="w-32">Penulis</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">Anton</span>
                            </div>
                            <div class="flex mb-2">
                                <strong class="w-32">Penerbit</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">Gramedia</span>
                            </div>
                            <div class="flex mb-2">
                                <strong class="w-32">Tahun Terbit</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">2020</span>
                            </div>
                            <div class="flex mb-2">
                                <strong class="w-32">Bahasa</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">Indonesia</span>
                            </div>
                            <div class="flex mb-2">
                                <strong class="w-32">Kategori</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">Romansa</span>
                            </div>
                            <div class="flex mb-2">
                                <strong class="w-32">ISBN</strong>
                                <span class="mr-1">:</span>
                                <span class="ml-2">1234567890</span>
                            </div>
                        </div>

                        {/* Book Cover */}
                        <div className="flex flex-1 mb-5 items-center justify-center sm:justify-end">
                            <div className="bg-gray-300 w-40 h-60 flex items-center justify-center mt-[-20px]">
                                <span className="text-gray-600">COVER</span>
                            </div>
                        </div>
                    </div>

                    {/* Synopsis */}
                    <div className="mt-10">
                        <h3 className="text-lg font-bold">Sinopsis</h3>
                        <div className="mt-4 text-gray-700 text-justify leading-relaxed w-full mx-0">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(function ShowBibliography({ auth }) {
    return (
        <MemberLayout member={auth.member}>
            <BookDetail />
        </MemberLayout>
    );
});
