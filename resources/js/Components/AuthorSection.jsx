import { useState } from "react";
import StoreAuthorModal from "./Modal/StoreAuthorModal";
import PrimaryButton from "./PrimaryButton";

export default function AuthorSection({ authors, onAdded, onDelete }) {
    const [isVisible, setIsVisible] = useState(false);
    const setModalVisibility = (isVisible) => setIsVisible(isVisible);

    return (
        <div className="w-full">
            <div className="flex flex-col basis-full">
                <PrimaryButton
                    type="button"
                    onClick={() => setModalVisibility(true)}
                    className="bg-shadow-blue w-max"
                >
                    Tambah Penulis
                </PrimaryButton>
                <div className="border mt-5 rounded p-5 h-28 overflow-auto">
                    {authors.length > 0 ? (
                        authors.map((author) => (
                            <div
                                key={author.author_id}
                                className="flex items-center border-b p-3"
                            >
                                <PrimaryButton
                                    type="button"
                                    className="bg-red-500 mr-5"
                                    onClick={() => onDelete(author.author_id)}
                                >
                                    Hapus
                                </PrimaryButton>
                                {author.author_name}
                            </div>
                        ))
                    ) : (
                        <p className="w-full h-full flex items-center justify-center">
                            Tidak ada penulis yang ditambahkan.
                        </p>
                    )}
                </div>
            </div>

            <StoreAuthorModal
                show={isVisible}
                onClose={() => setModalVisibility(false)}
                onAdded={onAdded}
            />
        </div>
    );
}

AuthorSection.