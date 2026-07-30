import { useLocation } from 'react-router-dom';
import PrintTable, { type PrintTableColumn } from '../components/features/PrintTable';
import RequestStatusBadge from '../components/features/RequestStatusBadge';
import PrintHeader from '../components/features/PrintHeader';
import PrintActions from '../components/features/PrintActions';
import type { RegisteredRequest } from '../types/Inventory';

const styles = {
    pageContainer: "w-full h-158 flex justify-center overflow-y-auto overflow-x-hidden pb-10",
    printableArea: "printable-area w-full max-w-5xl bg-background border border-black rounded-lg p-6 mt-6 mb-32",
}

interface RequestsReportState {
    rows: RegisteredRequest[];
    startDate: string;
    endDate: string;
}

function RequestsReportPage() {
    const location = useLocation();
    const state = location.state as RequestsReportState | null;

    const rows = state?.rows ?? [];
    const startDate = state?.startDate ?? '';
    const endDate = state?.endDate ?? '';

    const columns: PrintTableColumn<RegisteredRequest>[] = [
        { header: "No.", render: (request) => request.id },
        { header: "Proveedor", render: (request) => request.supplier },
        { header: "Fecha de Registro", render: (request) => request.registrationDate },
        { header: "Descripcion", render: (request) => request.description },
        { header: "Estado", render: (request) => <RequestStatusBadge status={request.status} /> },
        { header: "Productos", render: (request) => request.products.join(', ') },
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.printableArea}>
                <PrintHeader title="Detalle de Solicitudes de Proveedor" startDate={startDate} endDate={endDate} />
                <PrintTable columns={columns} rows={rows} getRowKey={(request) => request.id} />
                <PrintActions backTo="/reports/requests" />
            </div>
        </div>
    );
}

export default RequestsReportPage;