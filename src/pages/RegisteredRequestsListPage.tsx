import { useState } from 'react';
import { FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import TextFilterField from '../components/features/TextFilterField';
import DateFilterField from '../components/features/DateFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import RequestStatusBadge from '../components/features/RequestStatusBadge';
import IconButton from '../components/ui/IconButton';
import Pagination from '../components/features/Pagination';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import initialRequestsData from '../data/registeredRequests.json';
import type { RegisteredRequest } from '../types/Inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    actionsCell: "flex gap-3 justify-center",
}


function RegisteredRequestsListPage() {
    const [requests, setRequests] = useState<RegisteredRequest[]>(initialRequestsData as RegisteredRequest[]);

    const [codeInput, setCodeInput] = useState('');
    const [appliedCodeFilter, setAppliedCodeFilter] = useState('');

    const [dateFilter, setDateFilter] = useState('');

    const filteredRequests = useFilteredData(
        requests,
        (request) =>
            request.code.toLowerCase().includes(appliedCodeFilter.toLowerCase()) &&
            (!dateFilter || request.registrationDate === dateFilter),
        [appliedCodeFilter, dateFilter]
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredRequests, 3);

    function handleSearchByCode() {
        setAppliedCodeFilter(codeInput);
    }

    function handleViewRequest(request: RegisteredRequest) {
        console.log('Ver solicitud', request);
    }

    function handleConfirmRequest(requestId: number) {
        setRequests((currentRequests) =>
            currentRequests.map((request) =>
                request.id === requestId ? { ...request, status: 'Confirmada' } : request
            )
        );
    }

    const columns: DataTableColumn<RegisteredRequest>[] = [
        { header: "No.", render: (request) => request.id },
        { header: "Fecha de Registro", render: (request) => request.registrationDate },
        { header: "Estado", render: (request) => <RequestStatusBadge status={request.status} /> },
        { header: "Proveedor", render: (request) => request.supplier },
        {
            header: "Acciones",
            render: (request) => (
                <div className={styles.actionsCell}>
                    <IconButton icon={<FaFileAlt size={18} />} label="Ver solicitud" onClick={() => handleViewRequest(request)} />
                    {request.status === 'En Espera' && (
                        <IconButton icon={<FaCheckCircle size={18} />} label="Marcar como confirmada" onClick={() => handleConfirmRequest(request.id)} />
                    )}
                </div>
            ),
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <FiltersWrapper>
                <TextFilterField label="Codigo de Solicitud" value={codeInput} onChange={setCodeInput} onSearch={handleSearchByCode} />
                <DateFilterField label="Fecha de Registro" value={dateFilter} onChange={setDateFilter} />
            </FiltersWrapper>

            <DataTable
                title="Solicitudes Registradas"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(request) => request.id}
                itemsPerPage={3}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </div>
    );
}

export default RegisteredRequestsListPage;