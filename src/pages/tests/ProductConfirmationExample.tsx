import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import { ProductConfirmationModal } from '../../components/modals/ProductConfirmationModal';

const ProductConfirmationExample: React.FC = () => {
  const { openModal } = useModal();

  const productData = {
    nombre: 'Paracetamol 500mg',
    categoria: 'medicamentos',
    subcategoria: 'analgesicos',
    cantidad: 150,
    precioUnitario: 5.99,
    fechaVencimiento: '2025-12-31',
    lote: 'LOT-2024-001'
  };

  const categoriaOptions = [
    { value: 'medicamentos', label: 'Medicamentos' },
    { value: 'equipo_medico', label: 'Equipo Médico' },
    { value: 'insumos', label: 'Insumos' },
    { value: 'laboratorio', label: 'Laboratorio' },
    { value: 'otros', label: 'Otros' },
  ];

  const subcategoriaOptions = [
    { value: 'analgesicos', label: 'Analgésicos' },
    { value: 'antibioticos', label: 'Antibióticos' },
    { value: 'antiinflamatorios', label: 'Antiinflamatorios' },
    { value: 'antihistaminicos', label: 'Antihistamínicos' },
    { value: 'otros', label: 'Otros' },
  ];

  const handleOpenModal = (): void => {
    openModal(
      <ProductConfirmationModal 
        data={productData}
        onSave={(updatedData) => {
          // Logica de guardado
        }}
        buttonText="Actualizar"
        editable={true}
        categoriaOptions={categoriaOptions}
        subcategoriaOptions={subcategoriaOptions}
      />
    );
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">
      <button
        onClick={handleOpenModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
      >
        Abrir
      </button>
    </div>
  );
};

export default ProductConfirmationExample;