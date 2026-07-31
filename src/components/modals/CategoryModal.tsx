import React, { useState } from 'react';
import { FaSave, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { 
  ModalContainer, 
  ModalBody, 
  ModalFooter, 
  ModalField,
  ModalButton 
} from './index';

interface Subcategory {
  id: string;
  nombre: string;
}

interface CategoryModalProps {
  categoryName: string;
  subcategories: Subcategory[];
  onSave?: (categoryName: string, subcategories: Subcategory[]) => void;
  onEditSubcategory?: (id: string) => void;
  onDeleteSubcategory?: (id: string) => void;
  buttonText?: string;
  editable?: boolean;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ 
  categoryName: initialCategoryName,
  subcategories: initialSubcategories,
  onSave,
  onEditSubcategory,
  onDeleteSubcategory,
  buttonText = 'Actualizar',
  editable = false
}) => {
  const { closeModal } = useModal();
  const [categoryName, setCategoryName] = useState<string>(initialCategoryName);
  const [subcategories, setSubcategories] = useState<Subcategory[]>(initialSubcategories);

  const handleCategoryChange = (value: string) => {
    setCategoryName(value);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(categoryName, subcategories);
    }
    closeModal();
  };

  return (
    <ModalContainer className="max-w-md">
      <ModalBody withBackground={true}>
        <div className="mb-4">
          <ModalField
            label="Nombre de Categoria"
            value={categoryName}
            editable={false}
            onChange={handleCategoryChange}
            type="text"
          />
        </div>

        <div>
          <p className="text-gray-800 font-medium mb-2">Subcategorias</p>
          <div className="bg-[#D9D9D9] p-3 max-h-50 overflow-y-auto">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-gray-800 font-medium text-sm border-b border-gray-400 pb-1">
                <span>Nombre</span>
                <span>Acciones</span>
              </div>

              {subcategories.map((sub) => (
                <div key={sub.id} className="grid grid-cols-2 gap-2 text-gray-800 text-sm items-center">
                  <span className="truncate">{sub.nombre}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEditSubcategory && onEditSubcategory(sub.id)}
                      className="text-black hover:text-gray-600 transition-colors"
                      aria-label="Editar subcategoría"
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDeleteSubcategory && onDeleteSubcategory(sub.id)}
                      className="text-black hover:text-gray-600 transition-colors"
                      aria-label="Eliminar subcategoría"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ModalFooter>
          <ModalButton 
            icon={FaSave}
            onClick={handleSave}
          >
            {buttonText}
          </ModalButton>
          <ModalButton 
            icon={FaTimes}
            onClick={closeModal}
          >
            Cancelar
          </ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  );
};