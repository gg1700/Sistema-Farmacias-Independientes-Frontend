import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import DataTable, { type DataTableColumn } from '../components/features/DataTable';
import IconButton from '../components/features/IconButton';
import Pagination from '../components/features/Pagination';
import usePagination from '../hooks/usePagination';
import initialCategoriesData from '../data/registeredCategories.json';
import type { RegisteredCategory } from '../types/inventory';

const styles = {
    pageContainer: "flex flex-col gap-4",
    actionsCell: "flex gap-3 justify-center",
}


function RegisteredCategoriesListPage() {
    const [categories, setCategories] = useState<RegisteredCategory[]>(initialCategoriesData as RegisteredCategory[]);

    const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(categories, 4);

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
            <DataTable
                title="Categorias Registradas"
                columns={columns}
                rows={paginatedItems}
                getRowKey={(category) => category.id}
                itemsPerPage={4}
            />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </div>
    );
}

export default RegisteredCategoriesListPage;