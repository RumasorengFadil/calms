import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

export default function SearchBar({
    onSearch,
    searchLabel = "Cari",
    buttonLabel = "Cari",
    className,
}) {
    return (
        <div className="py-5 px-10 border-y">
            <div className={"w-2/3 flex items-center" + className}>
                <InputLabel htmlFor="search" className="text-base">
                    {searchLabel}
                </InputLabel>
                <TextInput
                    name="search"
                    id="search"
                    type="search"
                    className="p-1 pl-2 mx-3 w-full rounded-lg border border-black"
                />
                <PrimaryButton
                    onClick={onSearch}
                    className="px-8 py-2 text-base bg-primary"
                >
                    {buttonLabel}
                </PrimaryButton>
            </div>
        </div>
    );
}
