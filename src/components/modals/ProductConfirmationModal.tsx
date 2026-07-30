import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { 
  ModalContainer, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  ModalField,
  ModalButton 
} from './index';

interface SelectOption {
  value: string;
  label: string;
}

interface ProductData {
  nombre: string;
  categoria: string;
  subcategoria: string;
  cantidad: number | string;
  precioUnitario: number | string;
  fechaVencimiento: string;
  lote: string;
}

interface ProductConfirmationModalProps {
  data: ProductData;
  onSave?: (data: ProductData) => void;
  buttonText?: string;
  editable?: boolean;
  categoriaOptions?: SelectOption[];
  subcategoriaOptions?: SelectOption[];
}

export const ProductConfirmationModal: React.FC<ProductConfirmationModalProps> = ({ 
  data: initialData,
  onSave,
  buttonText = 'Actualizar',
  editable = false,
  categoriaOptions = [],
  subcategoriaOptions = []
}) => {
  const { closeModal } = useModal();
  const [formData, setFormData] = useState<ProductData>(initialData);

  const handleFieldChange = (field: keyof ProductData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const fields = [
    { 
      label: 'Categoría', 
      value: formData.categoria,
      field: 'categoria' as keyof ProductData,
      editable,
      type: 'select' as const,
      options: categoriaOptions,
      onChange: handleFieldChange('categoria')
    },
    { 
      label: 'Subcategoría', 
      value: formData.subcategoria,
      field: 'subcategoria' as keyof ProductData,
      editable,
      type: 'select' as const,
      options: subcategoriaOptions,
      onChange: handleFieldChange('subcategoria')
    },
    { 
      label: 'Cantidad', 
      value: formData.cantidad,
      field: 'cantidad' as keyof ProductData,
      editable,
      type: 'number' as const,
      onChange: handleFieldChange('cantidad')
    },
    { 
      label: 'Precio Unitario', 
      value: formData.precioUnitario,
      field: 'precioUnitario' as keyof ProductData,
      editable,
      type: 'number' as const,
      formatValue: (v: any) => v ? `$${v}` : '—',
      onChange: handleFieldChange('precioUnitario')
    },
    { 
      label: 'Fecha de Vencimiento', 
      value: formData.fechaVencimiento,
      field: 'fechaVencimiento' as keyof ProductData,
      editable,
      type: 'date' as const,
      onChange: handleFieldChange('fechaVencimiento')
    },
    { 
      label: 'N° de Lote', 
      value: formData.lote,
      field: 'lote' as keyof ProductData,
      editable,
      type: 'text' as const,
      onChange: handleFieldChange('lote')
    },
  ];

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    closeModal();
  };

  return (
    <ModalContainer className="max-w-md">
      <ModalHeader 
        title="Nombre del Producto" 
        subtitle={formData.nombre}
        withBackground={true}
      />
      
      <ModalBody withBackground={true}>
        <div className="space-y-2">
          {fields.map((field) => (
            <ModalField
              key={field.label}
              label={field.label}
              value={field.value}
              formatValue={field.formatValue}
              editable={field.editable}
              onChange={field.onChange}
              type={field.type || 'text'}
              options={field.options}
            />
          ))}
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