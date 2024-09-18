import { debounce } from "lodash";
import { useState } from "react";
import TextInput from "./TextInput";
import axios from "axios"; // Pastikan axios diimpor
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import toastUtils from "@/utils/toastUtils";

export default function Autocomplete({
    onSearch,
    placeholder = "",
    onChange,
    name,
    className = "",
    ...props
}) {
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    // const [error, setError] = useState(null); // Tambahkan state error

    const fetchResults = debounce(async (authorSearchKey) => {
        try {
            const response = await axios.get(route(name), {
                params: { authorSearchKey: authorSearchKey },
            });

            setResults(response.data);
            // setError(null); // Reset error jika berhasil
        } catch (error) {
            console.error("Search error:", error);
            toastUtils.showError({error : `Search error: ${error}`})
            // setError("Failed to fetch results. Please try again."); // Set error
        }
    }, 300);

    const handleSelectAuthor = (authorName) => {
        setShowDropdown(false);
        onChange(authorName);
    };

    return (
        <div className="relative w-max">
            <TextInput
                {...props}
                type="text"
                className={`p-1 pl-2 ${className}`}
                placeholder={placeholder || "e.g., Fadil, Jr"}
                name="authorName"
                onChange={(e) => {
                    onChange(e.target.value);
                    setShowDropdown(true);
                    fetchResults(e.target.value);
                }}
                onBlur={() => setShowDropdown(false)}
                autoComplete="off"
            />
            {/* {error && <div className="text-red-500">{error}</div>}{" "}
            Tampilkan error */}
            {showDropdown && results.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border max-h-20 overflow-y-auto border-gray-300 mt-1 rounded shadow-lg">
                    {results.map((result) => (
                        <li
                            key={result.author_id}
                            onMouseDown={() =>
                                handleSelectAuthor(result.author_name)
                            } // Menggunakan onClick jika lebih sesuai
                            className="p-1 hover:bg-gray-100 cursor-pointer"
                        >
                            {result.author_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
