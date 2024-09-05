import { memo } from "react";
import TextInput from "../TextInput";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

export default memo(function BibliographyItemActions({
    biblioId,
    className = "",
}) {
    const { data, delete: destroy, errors, get } = useForm({});

    const handleFormSubmit = (e, method) => {
        e.preventDefault();

        if (method === "get") {
            get(route("bibliographies.edit", biblioId));
        }

        if (method !== "delete") return;

        if (confirm("Apakah Anda yakin ingin menghapus data yang dipilih?")) {
            destroy(route("bibliographies.destroy", biblioId), {
                onSuccess: (page) => {
                    toast.success(page.props.flash.message);
                },
                onError: (errors) => {
                    toast.error(errors.error);
                },
            });
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
