import { Link } from "@inertiajs/react";
import { forwardRef, memo, useEffect, useRef, useState } from "react";

export default memo(function Slide({
    active = false,
    className = "",
    children,
    slidenumber = "",
    src,
    ...props
}) {
    return (
        <div
            {...props}
            slidenumber={slidenumber}
            className={`absolute w-full h-full transition-all ease-linear duration-1000 translate-x-16 slider-item ${className}`}
        >
            <a className={"" + className}>
                <img className="w-full h-full" src={src} alt="html"></img>
            </a>
        </div>
    );
});
