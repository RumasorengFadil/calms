import { Link } from "@inertiajs/react";
import { memo, useEffect, useRef, useState } from "react";

export default memo(function SliderNav({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <div
            className={`flex items-center justify-center ${className} cursor-pointer`}
        >
            {children}
        </div>
    );
});
