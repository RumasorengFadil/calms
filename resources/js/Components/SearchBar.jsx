import { memo, useState } from "react";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import toastUtils from "@/utils/toastUtils";
import { useAutocomplete } from "@/hooks/useAutocomplete";
import { Inertia } from "@inertiajs/inertia";

export default memo(function SearchBar({
    searchLabel = "Cari",
    buttonLabel = "Cari",
    route,
    className = "",
    setMembers = () => {},
    onSearch = () => {},
    searchKey,
    setSearchKey,
}) {
    const submit = (e) => {
        e.preventDefault();
        Inertia.get(route, { searchKey });
    };

    return (
        <div className={"flex items-center h-full " + className}>
            <InputLabel htmlFor="search" className="text-base">
                {searchLabel}
            </InputLabel>
            <TextInput
                name="search"
                id="search"
                type="search"
                className="p-1 pl-2 mx-3 w-full rounded-lg border border-black"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <PrimaryButton
                onClick={(e) => submit(e)}
                className="px-8 py-2 text-base bg-primary"
            >
                {buttonLabel}
            </PrimaryButton>
        </div>
    );
});
