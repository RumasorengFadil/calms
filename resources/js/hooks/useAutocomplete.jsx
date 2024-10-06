// hooks/useAutocomplete.js
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export const useAutocomplete = (fetchRoute) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        return () => {
            fetchResults.cancel(); // Cleanup debounce on unmount
        };
    }, []);

    const fetchResults = debounce(async (searchKey) => {
        try {
            const response = await axios.get(fetchRoute, {
                params: { searchKey },
            });
            // console.log(response);
            setResults(response.data);
        } catch (error) {
            console.error("Search error:", error);
        }
    }, 300);

    return { results, fetchResults };
};
