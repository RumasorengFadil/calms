import { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from "lodash";

function useFetch(fetchRoute, options = {}) {
    const [result, setResult] = useState(null); // State untuk menyimpan data
    const [loading, setLoading] = useState(true); // State untuk loading status
    const [error, setError] = useState(null); // State untuk error handling

    const fetchResults = debounce(async (searchKey) => {
        try {
            const response = await axios.get(fetchRoute, {
                params: { searchKey },
            });
            // console.log(response);
            setResult(response.data);
        } catch (error) {
            setError(error);
            console.error("Search error:", error);
        }finally{
            setLoading(false);
        }
    }, 300);

    return { result, loading, error, fetchResults }; // Kembalikan data, loading, dan error
}

export default useFetch;
