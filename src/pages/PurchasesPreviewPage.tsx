import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateFilterField from '../components/ui/DateFilterField';
import SelectFilterField from '../components/ui/SelectFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import Pagination from '../components/features/Pagination';
import PrintButton from '../components/ui/PrintButton';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import { buildPurchaseLineItems } from '../utils/buildPurchaseLineItems';
import type { PurchaseLineItem } from '../types/inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    datesRow: "flex gap-6",
    supplierRow: "flex",
    totalsWrapper: "w-full flex justify-center",
    totalsBar: "w-full max-w-5xl flex justify-end text-text font-bold text-lg px-4",
    printWrapper: "w-full flex justify-end pr-8 -mt-14",
}

const LINE_ITEMS_PER_PAGE = 2;

function PurchasesPreviewPage() {
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [supplierFilter, setSupplierFilter] = useState('');

    const lineItems = useMemo(() => buildPurchaseLineItems(), []);

    const supplierNames = useMemo(
        () => Array.from(new Set(lineItems.map((item) => item.supplier))),
        [lineItems]
    );

    const filteredLineItems = useFilteredData(
        lineItems,
        (item) => {
            const meetsStartDate = !startDate || item.date >= startDate;
            const meetsEndDate = !endDate || item.date <= endDate;
            const meetsSupplier = !supplierFilter || item.supplier === supplierFilter;
            return meetsStartDate && meetsEndDate && meetsSupplier;
        },
        [startDate, endDate, supplierFilter]
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredLineItems, LINE_ITEMS_PER_PAGE);

    function calculateSubtotal(item: PurchaseLineItem) {
        return item.quantity * item.unitPrice;
    }

    const total = filteredLineItems.reduce((sum, item) => sum + calculateSubtotal(item), 0);

    function handleGoToReport() {
        navigate('/reports/purchases/detail', { state: { rows: filteredLineItems, startDate, endDate } });
    }

    const columns: DataTableColumn<PurchaseLineItem>[] = [
        { header: "No.", render: (item) => item.purchaseId },
        { header: "Proveedor", render: (item) => item.supplier },
        { header: "Fecha", render: (item) => item.date },
        { header: "Producto", render: (item) => item.productName },
        { header: "Cantidad", render: (item) => item.quantity },
        { header: "Precio Unitario", render: (item) => `$${item.unitPrice.toFixed(2)}` },
        { header: "Fecha de Vencimiento", render: (item) => item.expirationDate },
        { header: "Subtotal", render: (item) => `$${calculateSubtotal(item).toFixed(2)}` },
    ];

    return (
        <div className={styles.pageContainer}>
            <FiltersWrapper>
                <div className={styles.datesRow}>
                    <DateFilterField label="Fecha de Inicio" value={startDate} onChange={setStartDate} />
                    <DateFilterField label="Fecha de Fin" value={endDate} onChange={setEndDate} />
                </div>
                <div className={styles.supplierRow}>
                    <SelectFilterField label="Proveedor" value={supplierFilter} options={supplierNames} onChange={setSupplierFilter} />
                </div>
            </FiltersWrapper>

            <DataTable
                title="Vista Previa de Impresion"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(item) => item.id}
                itemsPerPage={LINE_ITEMS_PER_PAGE}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />

            <div className={styles.totalsWrapper}>
                <div className={styles.totalsBar}>Total: ${total.toFixed(2)}</div>
            </div>

            <div className={styles.printWrapper}>
                <PrintButton onClick={handleGoToReport} />
            </div>
        </div>
    );
}

export default PurchasesPreviewPage;