import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { memo } from "react";

export default memo(function FormLayout({ children, ...props }) {
    return (
        <div className="bg-white">
            <form {...props} action="">{children}</form>
        </div>
    );
});
