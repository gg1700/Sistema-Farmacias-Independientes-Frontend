import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import { CategoryModal } from '../../components/modals/CategoryModal';

const CategoryModalExample: React.FC = () => {
  const { openModal } = useModal();

  const subcategories = [
    { id: '1', nombre: 'Analgésicos' },
    { id: '2', nombre: 'Antibióticos' },
    { id: '3', nombre: 'Antiinflamatorios' },
    { id: '4', nombre: 'Antihistamínicos' },
  ];

  const handleOpenModal = (): void => {
    openModal(
      <CategoryModal 
        categoryName="Medicamentos"
        subcategories={subcategories}
        onSave={(categoryName, subcategories) => {
          // Logica de guardado
        }}
        onEditSubcategory={(id) => {
          // Logica de editado
        }}
        onDeleteSubcategory={(id) => {
          // Logica de borrado
        }}
        buttonText="Actualizar"
        editable={true}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={handleOpenModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
      >
        Abrir Modal - Categorías
      </button>
    </div>
  );
};

export default CategoryModalExample;