import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/react";

const Pagination = ({ links, searchKey = "", className }) => {
    console.log(searchKey);
    const { get } = useForm({ searchKey: searchKey });
    return (
        <div className={`flex ${className}`}>
            {links.map((link, index) => (
                <div
                    key={index}
                    className={`flex p-1 justify-center mx-1 rounded-md items-center ${
                        link.active ? "bg-gray-800 text-white" : ""
                    }`}
                >
                    <Link
                        className={`px-2 text-sm `}
                        disabled={!link.url}
                        onClick={(e) => {
                            e.preventDefault();
                            get(link.url);
                        }}
                        dangerouslySetInnerHTML={{ __html: `${link.label}   ` }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Pagination;
