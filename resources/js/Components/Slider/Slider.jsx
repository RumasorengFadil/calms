import { Link } from "@inertiajs/react";
import { memo, useEffect, useRef, useState } from "react";

export default memo(function Slider({
    active = false,
    className = "",
    children,
    ...props
}) {
    const slider = useRef();
    const [slides, setSlides] = useState(null);
    // const sliderNav = useRef();
    // const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = function(slides, slideNumber){
        slides.forEach((slide,i) => {
            slide.style.transform = `translate(${(i - slideNumber)*100}%)`;
        });
    }

    const initSlides = () =>{
        const slides = slider.current.querySelectorAll("div");
        const totalSlides = slides.length;
        let currentSlide = slider.current.querySelector("div").getAttribute("slidenumber");

        slides.forEach((slide, i) => {
            slide.style.transform = `translate(${100 * i}%)`;
        });

        setInterval(() =>{
            if(currentSlide >= totalSlides){
                currentSlide = slider.current.querySelector("div").getAttribute("slidenumber");
            }

            goToSlide(slides, currentSlide);
            
            currentSlide++;
        },3000);
    }
    return (
        <div onLoad={initSlides} ref={slider} className={`relative overflow-hidden ${className}`}>
            {children}
        </div>
    );
});
