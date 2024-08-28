import { Link } from "@inertiajs/react";

export default function SidebarNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link {...props}>
            <li
                className={`${
                    active ? "bg bg-white shadow-lg text-primary" : "text-white"
                } mb-1 text-xl cursor-pointer w-64 p-2 rounded-r-full font-semibold ${className}`}
            >
                {children}
            </li>
        </Link>
    );
}
