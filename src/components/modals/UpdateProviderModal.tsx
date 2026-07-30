import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { 
  ModalContainer, 
  ModalBody, 
  ModalFooter, 
  ModalField,
  ModalButton 
} from './index';

interface ProviderData {
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
}

interface ModalUpdateProviderProps {
  data: any;
  onSave?: (data: ProviderData) => void;
  buttonText?: string;
}

export const ModalUpdateProvider: React.FC<ModalUpdateProviderProps> = ({ 
  data: initialData,
  onSave,
  buttonText = 'Actualizar'
}) => {
  const { closeModal } = useModal();
  const [formData, setFormData] = useState<ProviderData>(initialData);

  const handleFieldChange = (field: keyof ProviderData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const fields = [
    { 
      label: 'Nombre', 
      value: formData.nombre,
      field: 'nombre' as keyof ProviderData,
      editable: true,
      type: 'text' as const,
      onChange: handleFieldChange('nombre')
    },
    { 
      label: 'Dirección', 
      value: formData.direccion,
      field: 'direccion' as keyof ProviderData,
      editable: true,
      type: 'text' as const,
      onChange: handleFieldChange('direccion')
    },
    { 
      label: 'Teléfono', 
      value: formData.telefono,
      field: 'telefono' as keyof ProviderData,
      editable: true,
      type: 'text' as const,
      onChange: handleFieldChange('telefono')
    },
    { 
      label: 'Correo Electrónico', 
      value: formData.correo,
      field: 'correo' as keyof ProviderData,
      editable: true,
      type: 'text' as const,
      onChange: handleFieldChange('correo')
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
      <ModalBody withBackground={true}>
        <div className="space-y-2">
          {fields.map((field) => (
            <ModalField
              key={field.label}
              label={field.label}
              value={field.value}
              editable={field.editable}
              onChange={field.onChange}
              type={field.type}
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