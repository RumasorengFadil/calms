import { Link } from "@inertiajs/react";
import { forwardRef, memo, useEffect, useRef, useState } from "react";

export default memo(function SlidernavItem({
    active = false,
    className = "",
    children,
    src,
    ...props
}) {
    return (
        <div
            {...props}
            className={`w-2 h-2 mx-1 rounded-full bg-gray-300 ${className}`}
        ></div>
    );
});
