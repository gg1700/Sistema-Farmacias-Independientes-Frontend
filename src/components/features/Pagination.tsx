import { RiPlayLargeFill, RiPlayReverseLargeFill } from 'react-icons/ri';
import ActionButton from './ActionButton';

const styles = {
    container: "flex items-center justify-center gap-20 p-1",
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    function handlePreviousPage() {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    function handleNextPage() {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }

    return (
        <div className={styles.container}>
            <ActionButton
                bgColor="#E0DAB2"
                hoverColor="#82d9b6"
                IconName={RiPlayReverseLargeFill}
                action="Anterior"
                clickAction={handlePreviousPage}
            />
            <ActionButton
                bgColor="#E0DAB2"
                hoverColor="#82d9b6"
                IconName={RiPlayLargeFill}
                action="Siguiente"
                clickAction={handleNextPage}
            />
        </div>
    );
}

export default Pagination;