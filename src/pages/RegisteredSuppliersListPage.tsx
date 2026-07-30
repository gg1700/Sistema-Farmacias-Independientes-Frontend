import { useState } from 'react';
import { FaEdit, FaBan } from 'react-icons/fa';
import TextFilterField from '../components/ui/TextFilterField';
import FiltersWrapper from '../components/features/FiltersWrapper';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import StatusDot from '../components/features/StatusDot';
import IconButton from '../components/ui/IconButton';
import Pagination from '../components/features/Pagination';
import useFilteredData from '../hooks/useFilteredData';
import usePagination from '../hooks/usePagination';
import initialSuppliersData from '../data/suppliers.json';
import type { Supplier } from '../types/Inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    actionsCell: "flex gap-3 justify-center",
}


function RegisteredSuppliersListPage() {
    const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliersData as Supplier[]);
    const [codeFilter, setCodeFilter] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [appliedNameFilter, setAppliedNameFilter] = useState('');
    
    const filteredSuppliers = useFilteredData(
        suppliers,
        (supplier) =>
            supplier.code.toLowerCase().includes(codeFilter.toLowerCase()) &&
            supplier.name.toLowerCase().includes(appliedNameFilter.toLowerCase()),
        [codeFilter, appliedNameFilter]
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filteredSuppliers, 3);

    function handleSearchByName() {
        setAppliedNameFilter(nameInput);
    }

    function handleEditSupplier(supplier: Supplier) {
        console.log('Editar proveedor', supplier);
    }

    function handleToggleSupplierActive(supplierId: number) {
        setSuppliers((currentSuppliers) =>
            currentSuppliers.map((supplier) =>
                supplier.id === supplierId ? { ...supplier, isActive: !supplier.isActive } : supplier
            )
        );
    }

    const columns: DataTableColumn<Supplier>[] = [
        { header: "No.", render: (supplier) => supplier.id },
        { header: "Nombre", render: (supplier) => supplier.name },
        { header: "Direccion", render: (supplier) => supplier.address },
        { header: "Telefono", render: (supplier) => supplier.phone },
        { header: "Correo Electronico", render: (supplier) => supplier.email },
        { header: "Activo", render: (supplier) => <StatusDot isActive={supplier.isActive} /> },
        {
            header: "Acciones",
            render: (supplier) => (
                <div className={styles.actionsCell}>
                    <IconButton icon={<FaEdit size={18} />} label="Editar proveedor" onClick={() => handleEditSupplier(supplier)} />
                    <IconButton
                        icon={<FaBan size={18} />}
                        label={supplier.isActive ? "Desactivar proveedor" : "Activar proveedor"}
                        onClick={() => handleToggleSupplierActive(supplier.id)}
                    />
                </div>
            ),
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <FiltersWrapper>
                <TextFilterField label="Codigo de Proveedor" value={codeFilter} onChange={setCodeFilter} />
                <TextFilterField label="Nombre" value={nameInput} onChange={setNameInput} onSearch={handleSearchByName} />
            </FiltersWrapper>

            <DataTable
                title="Proveedores Registrados"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(supplier) => supplier.id}
                itemsPerPage={3}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </div>
    );
}

export default RegisteredSuppliersListPage;