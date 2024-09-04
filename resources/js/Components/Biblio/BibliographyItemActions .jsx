import { memo } from "react";
import TextInput from "../TextInput";
import { useForm } from "@inertiajs/react";

export default memo(function BibliographyItemActions ({ biblioId, className = "" }) {
    const { data, delete: destroy, errors, get } = useForm({});

    const handleFormSubmit = (e, method) => {
        e.preventDefault();

        if (method === "get") {
            get(route("bibliographies.edit", biblioId));
        }

        if (method === "delete") {
            destroy(route("bibliographies.destroy", biblioId));
        }
    };

    return (
        <div className={`flex h-full items-end ${className}`}>
            <form onSubmit={(e) => handleFormSubmit(e, "get")}>
                <button
                    type="submit"
                    className="text-primary underline cursor-pointer"
                >
                    Edit
                </button>
            </form>
            <form onSubmit={(e) => handleFormSubmit(e, "delete")}>
                <button
                    type="submit"
                    className="text-red-600 underline cursor-pointer mx-4"
                >
                    Hapus
                </button>
            </form>
        </div>
    );
});
