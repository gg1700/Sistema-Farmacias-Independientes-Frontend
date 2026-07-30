import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateFilterField from '../components/ui/DateFilterField';
import SelectFilterField from '../components/ui/SelectFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import StatusDot from '../components/features/StatusDot';
import Pagination from '../components/features/Pagination';
import PrintButton from '../components/ui/PrintButton';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import suppliersData from '../data/suppliers.json';
import type { Supplier } from '../types/inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    datesRow: "flex gap-6",
    activeRow: "flex",
    printWrapper: "w-full flex justify-end pr-8 -mt-10",
}

const ACTIVE_STATUS_OPTIONS = ["Activo", "Inactivo"];
const SUPPLIERS_PER_PAGE = 3;

function SuppliersPreviewPage() {
    const navigate = useNavigate();

    const suppliers = suppliersData as Supplier[];

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [activeFilter, setActiveFilter] = useState('');

    const filteredSuppliers = useFilteredData(
        suppliers,
        (supplier) => {
            const meetsStartDate = !startDate || supplier.registrationDate >= startDate;
            const meetsEndDate = !endDate || supplier.registrationDate <= endDate;
            const meetsActiveFilter =
                !activeFilter ||
                (activeFilter === "Activo" && supplier.isActive) ||
                (activeFilter === "Inactivo" && !supplier.isActive);
            return meetsStartDate && meetsEndDate && meetsActiveFilter;
        },
        [startDate, endDate, activeFilter]
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredSuppliers, SUPPLIERS_PER_PAGE);

    function handleGoToReport() {
        navigate('/reports/suppliers/detail', { state: { rows: filteredSuppliers, startDate, endDate } });
    }

    const columns: DataTableColumn<Supplier>[] = [
        { header: "No.", render: (supplier) => supplier.id },
        { header: "Nombre", render: (supplier) => supplier.name },
        { header: "Correo Electronico", render: (supplier) => supplier.email },
        { header: "Direccion", render: (supplier) => supplier.address },
        { header: "Telefono", render: (supplier) => supplier.phone },
        { header: "Activo", render: (supplier) => <StatusDot isActive={supplier.isActive} /> },
    ];

    return (
        <div className={styles.pageContainer}>
            <FiltersWrapper>
                <div className={styles.datesRow}>
                    <DateFilterField label="Fecha de Inicio" value={startDate} onChange={setStartDate} />
                    <DateFilterField label="Fecha de Fin" value={endDate} onChange={setEndDate} />
                </div>
                <div className={styles.activeRow}>
                    <SelectFilterField label="Activo" value={activeFilter} options={ACTIVE_STATUS_OPTIONS} onChange={setActiveFilter} />
                </div>
            </FiltersWrapper>

            <DataTable
                title="Vista Previa de Impresion"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(supplier) => supplier.id}
                itemsPerPage={SUPPLIERS_PER_PAGE}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />

            <div className={styles.printWrapper}>
                <PrintButton onClick={handleGoToReport} />
            </div>
        </div>
    );
}

export default SuppliersPreviewPage;