import { Fragment, useState } from "react";
import TextInput from "./TextInput";
import { useAutocomplete } from "@/hooks/useAutocomplete";
import { useDropdown } from "@/hooks/useDropdown";
import { Transition } from "@headlessui/react";

export default function Autocomplete({
    placeholder = "",
    onChange,
    route,
    className = "",
    show,
    name,
    children,
    ...props
}) {
    const { results, fetchResults } = useAutocomplete(route);
    const { showDropdown, setShowDropdown } = useDropdown(false);
    const [searchKey, setSearchKey] = useState("");

    {console.log(results)}
    const handleInputChange = (e) => {
        const value = e.target.value;
        onChange(e);
        setSearchKey(value);
        setShowDropdown(true);
        fetchResults(value);
    };

    const handleSelectDropdown = (e) => {
        setShowDropdown(false);
        onChange(e);
    };

    const handleBlur = () => {
        setShowDropdown(false);
    };

    return (
        <div className={`relative w-max ${className}`}>
            <TextInput
                {...props}
                type="text"
                className={`p-1 pl-2`}
                placeholder={placeholder}
                onChange={handleInputChange}
                name={name}
                onBlur={handleBlur}
                autoComplete="off"
            />

            <Transition show={showDropdown} as={Fragment} leave="duration-200">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <ul
                        className="absolute z-10 bg-white border max-h-20 overflow-y-auto border-gray-300 mt-1 rounded shadow-lg"
                        role="listbox"
                    >
                        {results.length > 0 ? (
                            results.map((result, i) => (
                                <input
                                    key={i}
                                    onMouseDown={(e) => handleSelectDropdown(e)}
                                    value={result[show]}
                                    className="p-1 hover:bg-gray-100 w-full cursor-pointer border-none focus:outline-none focus:border-none focus:ring-0"
                                    role="option"
                                    name={name}
                                    onChange={() => {}}
                                />
                            ))
                        ) : (
                            <li
                                role="option"
                                className="p-1 hover:bg-gray-100 cursor-pointer"
                            >{`Add new <${searchKey}>`}</li>
                        )}
                    </ul>
                </Transition.Child>
            </Transition>
        </div>
    );
}
