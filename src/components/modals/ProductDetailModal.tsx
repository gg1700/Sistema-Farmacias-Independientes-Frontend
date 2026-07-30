import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { 
  ModalContainer, 
  ModalBody, 
  ModalFooter, 
  ModalButton 
} from './index';

interface ProductItem {
  numero: number;
  nombre: string;
  cantidad: number;
}

interface ProductDetailModalProps {
  description: string;
  products: ProductItem[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  description,
  products
}) => {
  const { closeModal } = useModal();

  return (
    <ModalContainer className="max-w-4xl">
      <ModalBody withBackground={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-800 font-medium mb-2">Descripción</p>
            <div className="bg-[#D9D9D9] p-3 min-h-[150px] text-gray-800 text-sm">
              {description || 'Sin descripción'}
            </div>
          </div>

          <div>
            <p className="text-gray-800 font-medium mb-2">Datos de Productos</p>
            <div className="bg-[#D9D9D9] p-3 max-h-[200px] overflow-y-auto">
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-2 text-gray-800 font-medium text-sm border-b border-gray-400 pb-1">
                  <span>No.</span>
                  <span className="col-span-2">Nombre</span>
                  <span>Cantidad</span>
                </div>

                {products.map((product) => (
                  <div key={product.numero} className="grid grid-cols-4 gap-2 text-gray-800 text-sm">
                    <span>{product.numero}</span>
                    <span className="col-span-2 truncate">{product.nombre}</span>
                    <span>{product.cantidad}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ModalFooter>
          <ModalButton 
            icon={FaTimes}
            onClick={closeModal}
          >
            Cerrar
          </ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  );
};