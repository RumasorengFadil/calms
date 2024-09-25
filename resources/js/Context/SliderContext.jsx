import { useForm } from "@inertiajs/react";
import { createContext, useContext, useEffect, useState } from "react";

// Buat Context
const SliderContext = createContext();

// Custom Hook untuk menggunakan SliderContext
export function useSliderContext() {
    return useContext(SliderContext);
}

// Komponen Provider untuk membungkus komponen lain
export function SliderProvider({ children }) {

    const [currentSlide, setCurrentSlide] = useState(null); // Inisialisasi dengan array kosong
    const [slides, setSlides] = useState(null); // Inisialisasi dengan array kosong
    const [totalSlide, setTotalSlide] = useState(null); // Inisialisasi dengan array kosong
    
    const value = {
        currentSlide,
        slides,
        totalSlide,
        setCurrentSlide,
        setSlides,
        setTotalSlide
    };

    return (
        <SliderContext.Provider value={value}>
            {children}
        </SliderContext.Provider>
    );
}