import { Link } from "@inertiajs/react";

const Pagination = ({ links, className }) => {
    return (
        <div className={`${className}`}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    className={`hover:text-primary ${link.active ? "text-primary" : "text-gray-500"}`}
                    disabled={!link.url}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: `${link.label}   `}}
                />
            ))}
        </div>
    );
};

export default Pagination;