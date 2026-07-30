import { useLocation } from 'react-router-dom';
import PrintTable, { type PrintTableColumn } from '../components/features/PrintTable';
import StatusDot from '../components/features/StatusDot';
import PrintHeader from '../components/features/PrintHeader';
import PrintActions from '../components/features/PrintActions';
import type { Supplier } from '../types/inventory';

const styles = {
    pageContainer: "w-full h-158 flex justify-center overflow-y-auto overflow-x-hidden pb-10",
    printableArea: "printable-area w-full max-w-5xl bg-background border border-black rounded-lg p-6 mt-6 mb-32",
}

interface SuppliersReportState {
    rows: Supplier[];
    startDate: string;
    endDate: string;
}

function SuppliersReportPage() {
    const location = useLocation();
    const state = location.state as SuppliersReportState | null;

    const rows = state?.rows ?? [];
    const startDate = state?.startDate ?? '';
    const endDate = state?.endDate ?? '';

    const columns: PrintTableColumn<Supplier>[] = [
        { header: "No.", render: (supplier) => supplier.id },
        { header: "Nombre", render: (supplier) => supplier.name },
        { header: "Correo Electronico", render: (supplier) => supplier.email },
        { header: "Direccion", render: (supplier) => supplier.address },
        { header: "Telefono", render: (supplier) => supplier.phone },
        { header: "Activo", render: (supplier) => <StatusDot isActive={supplier.isActive} /> },
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.printableArea}>
                <PrintHeader title="Detalle de Proveedores" startDate={startDate} endDate={endDate} />
                <PrintTable columns={columns} rows={rows} getRowKey={(supplier) => supplier.id} />
                <PrintActions backTo="/reports/suppliers" />
            </div>
        </div>
    );
}

export default SuppliersReportPage;