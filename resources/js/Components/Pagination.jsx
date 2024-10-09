import { Link } from "@inertiajs/react";

const Pagination = ({ links, className }) => {
    return (
        <div className={`flex ${className}`}>
            {console.log(links)}
            {links.map((link, index) => (
                <div className={`flex p-1 justify-center mx-1 rounded-md items-center ${link.active ? "bg-gray-800 text-white" : ""}`}>
                    <Link
                        key={index}
                        className={`px-2 text-sm `}
                        disabled={!link.url}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html:  `${link.label}   `}}
                    />

                </div>

            ))}
        </div>
    );
};

export default Pagination;