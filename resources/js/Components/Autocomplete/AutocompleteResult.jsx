import { Transition } from "@headlessui/react";
import { useDropdown } from "@/hooks/useDropdown";

export default function AutocompleteResult({
    searchKey,
    results,
    show,
    className = "",
    ...props
}) {
    const { showDropdown, setShowDropdown } = useDropdown(false);

    return (
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
                    className="absolute z-10 w-full bg-white border max-h-20 overflow-y-auto border-gray-300 mt-1 rounded shadow-lg"
                    role="listbox"
                >
                    {results.map((result, i) => (
                        <li
                            key={i}
                            onMouseDown={(e) => handleSelectDropdown(e)}
                            value={result[show]}
                            className="p-1 hover:bg-gray-100 cursor-pointer"
                            role="option"
                        >
                            {result[show]}
                        </li>
                    ))}
                    {results.length < 1 && (
                        <li
                            role="option"
                            className="p-1 hover:bg-gray-100 cursor-pointer"
                        >{`Add new <${searchKey}>`}</li>
                    )}
                </ul>
            </Transition.Child>
        </Transition>
    );
}
