import { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { ModalContainer, ModalHeader, ModalBody, ModalFooter, ModalField, ModalButton } from './index';

interface SubcategoryModalProps {
  onSave?: (name: string) => void;
}

export const SubcategoryModal: React.FC<SubcategoryModalProps> = ({ onSave }) => {
  const { closeModal } = useModal();
  const [name, setName] = useState('');

  const handleSave = () => {
    if (name.trim() && onSave) {
      onSave(name.trim());
    }
    closeModal();
  };

  return (
    <ModalContainer className="max-w-md">
      <ModalHeader title="Añadir Subcategoria" withBackground />
      <ModalBody withBackground>
        <ModalField
          label="Nombre de la Subcategoria"
          value={name}
          editable
          type="text"
          onChange={(v) => setName(v)}
        />
        <ModalFooter>
          <ModalButton icon={FaSave} onClick={handleSave} disabled={!name.trim()}>
            Guardar
          </ModalButton>
          <ModalButton icon={FaTimes} onClick={closeModal}>
            Cerrar
          </ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  );
};
