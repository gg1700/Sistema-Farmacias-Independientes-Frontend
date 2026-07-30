import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import IconButton from '../components/ui/IconButton';
import SaveButton from '../components/features/SaveButton';
import CancelButton from '../components/ui/CancelButton';
import AddButton from '../components/ui/AddButton';
import Pagination from '../components/features/Pagination';
import ExpirationDateBadge from '../components/features/ExpirationDateBadge';
import usePagination from '../hooks/usePagination';
import { getStoredProducts, saveStoredProducts } from '../utils/purchaseProductStorage';
import type { PurchaseProduct } from '../types/Inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    actionsCell: "flex gap-3 justify-center",
    bottomActions: "flex justify-center gap-4 -mt-4",
}

const PRODUCTS_PER_PAGE = 3;

function PurchaseProductDetailPage() {
    const { purchaseId } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState<PurchaseProduct[]>(
        purchaseId ? getStoredProducts(purchaseId) : []
    );

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(products, PRODUCTS_PER_PAGE);

    function handleDeleteProduct(productId: string) {
        setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId));
    }

    function calculateSubtotal(product: PurchaseProduct) {
        return product.quantity * product.unitPrice;
    }

    function handleSavePurchase() {
        if (purchaseId) {
            saveStoredProducts(purchaseId, products);
        }
        navigate('/purchases/list');
    }

    function handleCancelPurchase() {
        navigate('/purchases/list');
    }

    const columns: DataTableColumn<PurchaseProduct>[] = [
        { header: "Nom.", render: (product) => product.name },
        { header: "Cant.", render: (product) => product.quantity },
        { header: "Cat.", render: (product) => product.category },
        { header: "Subcat.", render: (product) => product.subcategory },
        { header: "P.Unit", render: (product) => `$${product.unitPrice.toFixed(2)}` },
        { header: "Fec. Vto.", render: (product) => <ExpirationDateBadge expirationDate={product.expirationDate} /> },
        { header: "Lote", render: (product) => product.batch },
        { header: "Subt.", render: (product) => `$${calculateSubtotal(product).toFixed(2)}` },
        {
            header: "Accion",
            render: (product) => (
                <div className={styles.actionsCell}>
                    <IconButton icon={<FaTrash size={18} />} label="Eliminar producto" onClick={() => handleDeleteProduct(product.id)} />
                    <IconButton icon={<FaEdit size={18} />} label="Editar producto" />
                </div>
            ),
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <DataTable
                title="Datos de Productos"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(product) => product.id}
                itemsPerPage={PRODUCTS_PER_PAGE}
                footer={<AddButton />}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />

            <div className={styles.bottomActions}>
                <SaveButton onClick={handleSavePurchase} />
                <CancelButton onClick={handleCancelPurchase} />
            </div>
        </div>
    );
}

export default PurchaseProductDetailPage;