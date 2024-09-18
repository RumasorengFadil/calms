import { useForm } from "@inertiajs/react";
import { createContext, useContext, useState } from "react";

// Buat Context
const AutocompleteContext = createContext();

// Custom Hook untuk menggunakan AutocompleteContext
export function useAutocompleteContext() {
    return useContext(AutocompleteContext);
}

// Komponen Provider untuk membungkus komponen lain
export function AutocompleteProvider({ children }) {
    const { get, errors, data, setData } = useForm({ key: "" });

    const [authors, setAuthors] = useState([]); // Inisialisasi dengan array kosong

    const fetchAuthors = debounce((key, name) => {
        if (key.length > 2) {
            get(
                route(name),
                { key },
                {
                    onSuccess: (response) => {
                        setAuthors(response.props.authors || []); // Pastikan authors selalu array
                    },
                    onError: (errors) => {
                        console.error(errors);
                    },
                }
            );
        }
    }, 300);

    const value = {
        authors,
        fetchAuthors,
        setData,
        data,
        errors // Sertakan errors jika diperlukan untuk handling
    };

    return (
        <AutocompleteContext.Provider value={value}>
            {children}
        </AutocompleteContext.Provider>
    );
}