import { useSliderContext } from "@/Context/SliderContext";
import { Link } from "@inertiajs/react";
import { memo, useEffect, useRef, useState } from "react";

export default memo(function Slides({
    className,
    children
}) {
    

    return (
        <div
            className={`relative overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
});
