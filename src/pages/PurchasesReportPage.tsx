import { useLocation } from 'react-router-dom';
import GroupedPurchasesPrintTable from '../components/features/GroupedPurchasesPrintTable';
import PrintHeader from '../components/features/PrintHeader';
import PrintActions from '../components/features/PrintActions';
import type { PurchaseLineItem } from '../types/Inventory';

const styles = {
    pageContainer: "w-full h-158 flex justify-center overflow-y-auto overflow-x-hidden pb-10",
    printableArea: "printable-area w-full max-w-5xl bg-background border border-black rounded-lg p-6 mt-6 mb-32",
}

interface PurchasesReportState {
    rows: PurchaseLineItem[];
    startDate: string;
    endDate: string;
}

function PurchasesReportPage() {
    const location = useLocation();
    const state = location.state as PurchasesReportState | null;

    const rows = state?.rows ?? [];
    const startDate = state?.startDate ?? '';
    const endDate = state?.endDate ?? '';

    return (
        <div className={styles.pageContainer}>
            <div className={styles.printableArea}>
                <PrintHeader title="Detalle de Compras" startDate={startDate} endDate={endDate} />
                <GroupedPurchasesPrintTable rows={rows} />
                <PrintActions backTo="/reports/purchases" />
            </div>
        </div>
    );
}

export default PurchasesReportPage;