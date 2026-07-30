import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import DataTable, { type DataTableColumn } from '../components/ui/DataTable';
import IconButton from '../components/ui/IconButton';
import Pagination from '../components/ui/Pagination';
import usePagination from '../hooks/usePagination';
import initialCategoriesData from '../data/registeredCategories.json';
import type { RegisteredCategory } from '../types/inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    sectionTitle: "text-center text-lg font-semibold text-text",
    contentCard: "bg-modals rounded-lg p-6 flex flex-col gap-4",
    actionsCell: "flex gap-3 justify-center",
}

const CATEGORIES_PER_PAGE = 4;

function RegisteredCategoriesListPage() {
    const [categories, setCategories] = useState<RegisteredCategory[]>(initialCategoriesData as RegisteredCategory[]);

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(categories, CATEGORIES_PER_PAGE);

    function handleEditCategory(category: RegisteredCategory) {
        console.log('Editar categoria', category);
    }

    function handleDeleteCategory(categoryId: number) {
        setCategories((currentCategories) => currentCategories.filter((category) => category.id !== categoryId));
    }

    const columns: DataTableColumn<RegisteredCategory>[] = [
        { header: "No.", render: (category) => category.id },
        { header: "Categoria", render: (category) => category.category },
        { header: "Subcategorias", render: (category) => category.subcategories.join(', ') },
        {
            header: "Acciones",
            render: (category) => (
                <div className={styles.actionsCell}>
                    <IconButton icon={<FaEdit size={18} />} label="Editar categoria" onClick={() => handleEditCategory(category)} />
                    <IconButton icon={<FaTrash size={18} />} label="Eliminar categoria" onClick={() => handleDeleteCategory(category.id)} />
                </div>
            ),
        },
    ];

    return (
        <div className={styles.pageContainer}>
            <h2 className={styles.sectionTitle}>Categorias Registradas</h2>

            <div className={styles.contentCard}>
                <DataTable columns={columns} rows={paginatedItems} getRowKey={(category) => category.id} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
            </div>
        </div>
    );
}

export default RegisteredCategoriesListPage;