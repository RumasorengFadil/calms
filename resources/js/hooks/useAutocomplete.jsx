// hooks/useAutocomplete.js
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export const useAutocomplete = (fetchRoute, defaultValue) => {
    const [results, setResults] = useState(defaultValue?defaultValue:[]);

    useEffect(() => {
        return () => {
            fetchResults.cancel(); // Cleanup debounce on unmount
        };
    }, []);

    const fetchResults = debounce(async (searchKey, page="") => {
        try {
            const response = await axios.get(fetchRoute, {
                params: { searchKey },
                page : page,
            });
            setResults(response.data);
        } catch (error) {
            console.error("Search error:", error);
        }
    }, 100);

    return { results, fetchResults };
};
