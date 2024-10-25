import { Link } from "@inertiajs/react";
import { memo, useEffect, useRef, useState } from "react";
import SliderNavItem from "./SliderNavItem";
import SliderNav from "./SliderNav";
import Slides from "./Slides";
import Slide from "./Slide";

export default memo(function Slider({ slides, interval = 2500, className }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous slide
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next slide
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Autoplay logic
    useEffect(() => {
        const timer = setInterval(() => {
            goToNext(); // Move to the next slide every X seconds
        }, interval);

        // Clear the interval when component unmounts or when a manual navigation happens
        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, interval]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <Slides className="mt-8 h-72">
                {slides.map((slide, i) => (
                    <Slide
                        key={i}
                        style={{
                            transform: `translate(${
                                (i - currentIndex) * 100
                            }%)`,
                        }}
                        slidenumber={i}
                        src={slide.image}
                    />
                ))}
            </Slides>

            <SliderNav className="mt-4">
                {slides.map((_, i) => (
                    <SliderNavItem
                        key={i}
                        style = {{backgroundColor : `${i === currentIndex ? "white" : ""}`}}
                        onClick={() => goToSlide(i)}
                    />
                ))}
            </SliderNav>
        </div>
    );
});
