
const Pagination = ({ links }) => {
    return (
        <div>
            {links.map((link, index) => (
                <a
                    key={index}
                    className={`${link.active ? "text-primary" : "text-gray-500"}`}
                    disabled={!link.url}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: `${link.label}   `}}
                />
            ))}
        </div>
    );
};

export default Pagination;