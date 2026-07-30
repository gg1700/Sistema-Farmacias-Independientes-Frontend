import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import { ProductDetailModal } from '../../components/modals/ProductDetailModal';
//
const ProductDetailModalExample: React.FC = () => {
  const { openModal } = useModal();

  const description = 'Solicitud de medicamentos para el área de urgencias. Se requieren insumos básicos para atender a los pacientes.';

  const products = [
    { numero: 1, nombre: 'Paracetamol 500mg', cantidad: 50 },
    { numero: 2, nombre: 'Ibuprofeno 400mg', cantidad: 30 },
    { numero: 3, nombre: 'Amoxicilina 500mg', cantidad: 20 },
    { numero: 4, nombre: 'Diclofenaco 50mg', cantidad: 15 },
    { numero: 5, nombre: 'Omeprazol 20mg', cantidad: 25 },
    { numero: 6, nombre: 'Losartán 50mg', cantidad: 10 },
    { numero: 7, nombre: 'Metformina 850mg', cantidad: 18 },
    { numero: 8, nombre: 'Enalapril 10mg', cantidad: 12 },
  ];

  const handleOpenModal = (): void => {
    openModal(
      <ProductDetailModal 
        description={description}
        products={products}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={handleOpenModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
      >
        Abrir Modal - Detalle de Productos
      </button>
    </div>
  );
};

export default ProductDetailModalExample;