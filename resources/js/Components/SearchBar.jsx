import { memo } from "react";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import toastUtils from "@/utils/toastUtils";

export default memo(function SearchBar({
    searchLabel = "Cari",
    buttonLabel = "Cari",
    route,
    className = "",
    setMembers = () => {},
}) {
    const { data, setData, get } = useForm({
        searchKey: "",
    });

    const handleSearchKey = (searchKey) => {
        setData("searchKey", searchKey);
    };

    const submit = (e) => {
        e.preventDefault();
        get(route, {
            onSuccess : (response) =>{
                setMembers(response.props.flash.members);
            },
            onError: (error) => {
                toastUtils.showError(error)
            },
        });
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
                value={data.searchKey}
                onChange={(e) => handleSearchKey(e.target.value)}
            />
            <PrimaryButton
                onClick={submit}
                className="px-8 py-2 text-base bg-primary"
            >
                {buttonLabel}
            </PrimaryButton>
        </div>
    );
});
