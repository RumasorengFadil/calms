import { Link } from "@inertiajs/react";
import { memo } from "react";

export default memo(function Breadcrumbs({ breadcrumbs }) {
    return (
        <nav>
            <ul className="flex space-x-2 py-8 pl-10 text-base">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index}>
                        <Link
                            className={
                                route().current() === crumb.name
                                    ? "font-bold"
                                    : ""
                            }
                            href={route(crumb.name, crumb.params)}
                        >
                            {crumb.label}
                        </Link>
                        {index < breadcrumbs.length - 1 && " /"}
                    </li>
                ))}
            </ul>
        </nav>
    );
});
