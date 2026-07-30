import { useState } from 'react';
import { FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import TextFilterField from '../components/ui/TextFilterField';
import DateFilterField from '../components/ui/DateFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import RequestStatusBadge from '../components/features/RequestStatusBadge';
import IconButton from '../components/ui/IconButton';
import Pagination from '../components/features/Pagination';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import type { RegisteredRequest } from '../types/Inventory';
import { registeredRequests } from '../constants/requests';
import { useModal } from '../contexts/ModalContext';
import { ApprovalModal } from '../components/modals/ApprovalModal';
import { ProductDetailModal } from '../components/modals/ProductDetailModal';

const styles = {
    pageContainer: "flex flex-col gap-4",
    actionsCell: "flex gap-3 justify-center",
}


function RegisteredRequestsListPage() {
    const [requests, setRequests] = useState<RegisteredRequest[]>(registeredRequests as RegisteredRequest[]);
    const { openModal } = useModal();

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
        openModal(
            <ProductDetailModal
                description={request.description}
                products={request.products.map((name, i) => ({
                    numero: i + 1,
                    nombre: name,
                    cantidad: 1,
                }))}
            />
        );
    }

    function handleApprovalRequest(request: RegisteredRequest) {
        const statusMap: Record<string, 'cancelled' | 'completed' | null> = {
            'Cancelada': 'cancelled',
            'Confirmada': 'completed',
            'En Espera': null,
        };

        openModal(
            <ApprovalModal
                currentStatus={statusMap[request.status] ?? null}
                onSave={(newStatus) => {
                    const reverseMap: Record<string, 'Cancelada' | 'Confirmada'> = {
                        'cancelled': 'Cancelada',
                        'completed': 'Confirmada',
                    };
                    setRequests((current) =>
                        current.map((r) =>
                            r.id === request.id
                                ? { ...r, status: reverseMap[newStatus] }
                                : r
                        )
                    );
                }}
            />
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
                        <IconButton icon={<FaCheckCircle size={18} />} label="Marcar como confirmada" onClick={() => handleApprovalRequest(request)} />
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