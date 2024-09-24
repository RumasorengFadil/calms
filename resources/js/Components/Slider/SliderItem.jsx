import { Link } from "@inertiajs/react";
import { forwardRef, memo, useEffect, useRef, useState } from "react";

export default memo(function SliderItem({
    active = false,
    className = "",
    children,
    slidenumber = "",
    src,
    ...props
}) {
    // const slide = useRef();
    // const sliderNav = useRef();
    // const [currentSlide, setCurrentSlide] = useState(0);

    // const goToSlide = function(slideNumber){
    //     slide.style.transform = `translate(${(i - slideNumber)*100}%)` 
    // }

    // useEffect(() =>{
    //     slide.current.style.transform = `translate(${100*slidenumber}%)`;

        
    // })
    return (
        <div
            slidenumber={slidenumber}
            className={`absolute w-full h-full transition-all ease-linear duration-1000 translate-x-16 ${className}`}
            // ref={slide}
        >
            <a className={"" + className}>
                <img className="w-full h-full" src={src} alt="html"></img>
            </a>
        </div>
    );
});
