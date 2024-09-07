import { Link } from "@inertiajs/react";

export default function Breadcrumbs({ links, param }) {
    return (
        <nav>
            <ul className="flex space-x-2">
                {links.map((link, index) => (
                    <li key={index}>
                        {console.log(link.params)}
                        <Link href={route(link.name, param)}>
                            {link.label}
                        </Link>
                        {index < links.length - 1 && ">"}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
