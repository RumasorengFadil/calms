import { useState, useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function LazyLoading({ items }) {
    const [itemList, setItemList] = useState(items.data); // Set data awal dari server
    const [currentPage, setCurrentPage] = useState(items.current_page);
    const [hasMorePages, setHasMorePages] = useState(items.next_page_url !== null);
    const observer = useRef();

    const lastItemRef = (node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMorePages) {
                loadMoreItems();
            }
        });
        if (node) observer.current.observe(node);
    };

    const loadMoreItems = () => {
        Inertia.get(`/items?page=${currentPage + 1}`, {}, {
            preserveScroll: true,
            onSuccess: (page) => {
                setItemList((prevItems) => [...prevItems, ...page.props.items.data]);
                setCurrentPage(page.props.items.current_page);
                setHasMorePages(page.props.items.next_page_url !== null);
            },
        });
    };

    return (
        <div className="item-list">
            {itemList.map((item, index) => (
                <div
                    key={item.id}
                    ref={index === itemList.length - 1 ? lastItemRef : null}
                    className="item"
                >
                    {item.title}
                </div>
            ))}
        </div>
    );
}