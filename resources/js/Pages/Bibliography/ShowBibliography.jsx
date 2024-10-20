import MemberLayout from "@/Layouts/MemberLayout";
import { Head, Link } from "@inertiajs/react";
import { memo } from "react";

const BookDetail = ({ biblio }) => {
    return (
        <>
            <Head title="Detail Biblio" />

            <div className="min-h-screen bg-gray-100">
                {/* Back Button */}
                <div className="p-4 bg-primary">
                    <Link
                        onClick={() => history.back()}
                        className="text-white underline"
                    >
                        Kembali
                    </Link>
                </div>

                {/* Book Detail */}
                <div className="py-10">
                    {/* Book Info */}
                    <div className="bg-white shadow-md max-w-4xl mx-auto p-16 rounded-lg">
                        <div className="flex flex-col-reverse sm:flex-row">
                            <div className="flex-1">
                                <div className="flex mb-2">
                                    <strong className="w-32">Judul</strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">{biblio.title}</span>
                                </div>
                                <div className="flex mb-2">
                                    <strong className="w-32">Penulis</strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">
                                        {biblio.authors.map(
                                            (author) =>
                                                `${author.author.author_name}, `
                                        )}
                                    </span>
                                </div>
                                <div className="flex mb-2">
                                    <strong className="w-32">Penerbit</strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">
                                        {biblio.publisher.publisher_name}
                                    </span>
                                </div>
                                <div className="flex mb-2">
                                    <strong className="w-32">
                                        Tahun Terbit
                                    </strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">
                                        {biblio.publish_year}
                                    </span>
                                </div>
                                <div className="flex mb-2">
                                    <strong className="w-32">Bahasa</strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">
                                        {biblio.language.language_name}
                                    </span>
                                </div>
                                <div className="flex mb-2">
                                    <strong className="w-32">Kategori</strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">
                                        {biblio.category}
                                    </span>
                                </div>
                                <div className="flex mb-2">
                                    <strong className="w-32">ISBN</strong>
                                    <span className="mr-1">:</span>
                                    <span className="ml-2">
                                        {biblio.isbn_issn}
                                    </span>
                                </div>
                            </div>

                            {/* Book Cover */}
                            <div className="flex mb-5 items-center justify-center sm:justify-end">
                                <img
                                    src={
                                        biblio.biblio_photo_path
                                            ? `/storage/uploads/img/biblios/photo/${biblio.biblio_photo_path}`
                                            : "/img/bibliography/biblio-default-picture.png"
                                    }
                                    className="bg-gray-300 w-40 h-60 flex items-center justify-center mt-[-20px]"
                                />
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div className="mt-10">
                            <h3 className="text-lg font-bold">Sinopsis</h3>
                            <div className="mt-4 text-gray-700 text-justify leading-relaxed w-full mx-0">
                                {biblio.abstract}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(function ShowBibliography({ auth, biblio }) {
    return (
        <MemberLayout member={auth.member}>
            <BookDetail biblio={biblio} />
        </MemberLayout>
    );
});
