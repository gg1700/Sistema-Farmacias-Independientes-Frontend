import { FaCaretLeft } from 'react-icons/fa';

const styles = {
    container: "flex items-center justify-center gap-8 pt-4",
    pageButton: "flex items-center gap-2 bg-modals border border-text rounded-full px-8 py-3 text-base font-bold text-text hover:bg-[#6FCF97] transition-colors disabled:opacity-40 disabled:hover:bg-modals disabled:cursor-not-allowed",
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div className={styles.container}>
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={styles.pageButton}
            >
                <FaCaretLeft size={20} />
                Anterior
            </button>
            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={styles.pageButton}
            >
                <FaCaretLeft size={20} className="rotate-180" />
                Siguiente
            </button>
        </div>
    );
}

export default Pagination;