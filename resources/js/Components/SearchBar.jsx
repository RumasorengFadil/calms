import { memo } from "react";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";

export default memo(function SearchBar({
    searchLabel = "Cari",
    buttonLabel = "Cari",
    className,
}) {
    const { data, setData, get } = useForm({
        biblioSearchKey: "",
    });

    const handleBiblioSearchKey = (biblioSearchKey) => {
        setData("biblioSearchKey", biblioSearchKey);
    };

    const submit = (e) => {
        e.preventDefault();
        get(route("bibliographies.index"), {
            onError: (error) => {
                toast.error(error);
            },
        });
    };
    return (
        <div className={"w-2/3 flex items-center h-full" + className}>
            <InputLabel htmlFor="search" className="text-base">
                {searchLabel}
            </InputLabel>
            <TextInput
                name="search"
                id="search"
                type="search"
                className="p-1 pl-2 mx-3 w-full rounded-lg border border-black"
                value={data.biblioSearchKey}
                onChange={(e) => handleBiblioSearchKey(e.target.value)}
            />
            <PrimaryButton
                onClick={submit}
                className="px-8 py-2 text-base bg-primary"
            >
                {buttonLabel}
            </PrimaryButton>

            <div>
                <ToastContainer />
            </div>
        </div>
    );
});
