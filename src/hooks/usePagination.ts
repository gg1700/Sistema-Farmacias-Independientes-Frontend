import { useMemo, useState } from 'react';

function usePagination<TItem>(items: TItem[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    }, [items, currentPage, itemsPerPage]);

    function goToPage(pageNumber: number) {
        const clampedPage = Math.min(Math.max(pageNumber, 1), totalPages);
        setCurrentPage(clampedPage);
    }

    return { currentPage, totalPages, paginatedItems, goToPage };
}

export default usePagination;