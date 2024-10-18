// hooks/useAutocomplete.js
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export const useImagePreview = (data) => {
    const [imagePreview, setImagePreview] = useState(null); // State untuk menyimpan Data URL

    const handleFileChange = (e, callback) => {
        const file = e.target.files[0]; // Ambil file pertama dari input
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result); // Simpan Data URL di state untuk preview
            };

            reader.readAsDataURL(file); // Baca file sebagai Data URL
        }
        console.log(file);
        callback(file);
    };

    return { imagePreview, handleFileChange };
};
