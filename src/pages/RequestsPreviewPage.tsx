import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateFilterField from '../components/ui/DateFilterField';
import SelectFilterField from '../components/ui/SelectFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import RequestStatusBadge from '../components/features/RequestStatusBadge';
import Pagination from '../components/features/Pagination';
import PrintButton from '../components/ui/PrintButton';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import requestsData from '../data/registeredRequests.json';
import type { RegisteredRequest } from '../types/inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    datesRow: "flex gap-6",
    selectsRow: "flex gap-6",
    printWrapper: "w-full flex justify-end pr-8 -mt-10",
}

const STATUS_OPTIONS = ["En Espera", "Confirmada", "Cancelada"];
const REQUESTS_PER_PAGE = 3;

function RequestsPreviewPage() {
    const navigate = useNavigate();

    const requests = requestsData as RegisteredRequest[];

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [supplierFilter, setSupplierFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const supplierNames = useMemo(
        () => Array.from(new Set(requests.map((request) => request.supplier))),
        [requests]
    );

    const filteredRequests = useFilteredData(
        requests,
        (request) => {
            const meetsStartDate = !startDate || request.registrationDate >= startDate;
            const meetsEndDate = !endDate || request.registrationDate <= endDate;
            const meetsSupplier = !supplierFilter || request.supplier === supplierFilter;
            const meetsStatus = !statusFilter || request.status === statusFilter;
            return meetsStartDate && meetsEndDate && meetsSupplier && meetsStatus;
        },
        [startDate, endDate, supplierFilter, statusFilter]
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredRequests, REQUESTS_PER_PAGE);

    function handleGoToReport() {
        navigate('/reports/requests/detail', { state: { rows: filteredRequests, startDate, endDate } });
    }

    const columns: DataTableColumn<RegisteredRequest>[] = [
        { header: "No.", render: (request) => request.id },
        { header: "Proveedor", render: (request) => request.supplier },
        { header: "Fecha de Registro", render: (request) => request.registrationDate },
        { header: "Descripcion", render: (request) => request.description },
        { header: "Estado", render: (request) => <RequestStatusBadge status={request.status} /> },
        { header: "Productos", render: (request) => request.products.join(', ') },
    ];

    return (
        <div className={styles.pageContainer}>
            <FiltersWrapper>
                <div className={styles.datesRow}>
                    <DateFilterField label="Fecha de Inicio" value={startDate} onChange={setStartDate} />
                    <DateFilterField label="Fecha de Fin" value={endDate} onChange={setEndDate} />
                </div>
                <div className={styles.selectsRow}>
                    <SelectFilterField label="Proveedor" value={supplierFilter} options={supplierNames} onChange={setSupplierFilter} />
                    <SelectFilterField label="Estado" value={statusFilter} options={STATUS_OPTIONS} onChange={setStatusFilter} />
                </div>
            </FiltersWrapper>

            <DataTable
                title="Vista Previa de Impresion"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(request) => request.id}
                itemsPerPage={REQUESTS_PER_PAGE}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />

            <div className={styles.printWrapper}>
                <PrintButton onClick={handleGoToReport} />
            </div>
        </div>
    );
}

export default RequestsPreviewPage;