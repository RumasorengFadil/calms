import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function MainContentLayout({ children }) {
    return (
        <div className="w-full overflow-y-auto max-h-screen">
            {children}
        </div>
    );
}
