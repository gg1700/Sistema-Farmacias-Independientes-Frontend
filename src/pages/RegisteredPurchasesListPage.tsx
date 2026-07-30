import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaTrash } from 'react-icons/fa';
import DateFilterField from '../components/ui/DateFilterField';
import SelectFilterField from '../components/ui/SelectFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import IconButton from '../components/ui/IconButton';
import Pagination from '../components/features/Pagination';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import initialPurchasesData from '../data/registeredPurchases.json';
import type { RegisteredPurchase } from '../types/inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    datesRow: "flex gap-6",
    supplierRow: "flex",
    actionsCell: "flex gap-3 justify-center",
}



function RegisteredPurchasesListPage() {
    const [purchases, setPurchases] = useState<RegisteredPurchase[]>(initialPurchasesData as RegisteredPurchase[]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [supplierFilter, setSupplierFilter] = useState('');

    const supplierNames = useMemo(
        () => Array.from(new Set(purchases.map((purchase) => purchase.supplier))),
        [purchases]
    );

    const filteredPurchases = useFilteredData(
        purchases,
        (purchase) => {
            const meetsStartDate = !startDate || purchase.registrationDate >= startDate;
            const meetsEndDate = !endDate || purchase.registrationDate <= endDate;
            const meetsSupplier = !supplierFilter || purchase.supplier === supplierFilter;
            return meetsStartDate && meetsEndDate && meetsSupplier;
        },
        [startDate, endDate, supplierFilter]
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredPurchases,3);

    function handleDeletePurchase(purchaseId: number) {
        setPurchases((currentPurchases) => currentPurchases.filter((purchase) => purchase.id !== purchaseId));
    }

    const columns: DataTableColumn<RegisteredPurchase>[] = [
        { header: "No.", render: (purchase) => purchase.id },
        { header: "Proveedor", render: (purchase) => purchase.supplier },
        { header: "Fecha de Registro", render: (purchase) => purchase.registrationDate },
        { header: "Responsable", render: (purchase) => purchase.responsible },
        { header: "Total", render: (purchase) => `$${purchase.total.toFixed(2)}` },
        {
            header: "Acciones",
            render: (purchase) => (
                <div className={styles.actionsCell}>
                    <Link to={`/adquisiciones/registro/${purchase.id}`}>
                        <IconButton icon={<FaFileAlt size={18} />} label="Ver detalle de compra" />
                    </Link>
                    <IconButton icon={<FaTrash size={18} />} label="Eliminar compra" onClick={() => handleDeletePurchase(purchase.id)} />
                </div>
            ),
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <FiltersWrapper>
                <div className={styles.datesRow}>
                    <DateFilterField label="Fecha de Inicio" value={startDate} onChange={setStartDate} />
                    <DateFilterField label="Fecha Fin" value={endDate} onChange={setEndDate} />
                </div>
                <div className={styles.supplierRow}>
                    <SelectFilterField label="Nombre de Proveedor" value={supplierFilter} options={supplierNames} onChange={setSupplierFilter} />
                </div>
            </FiltersWrapper>

            <DataTable
                title="Compras Registradas"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(purchase) => purchase.id}
                itemsPerPage={3}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </div>
    );
}

export default RegisteredPurchasesListPage;