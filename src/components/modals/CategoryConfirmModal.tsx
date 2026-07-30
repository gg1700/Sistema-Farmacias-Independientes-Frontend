import { FaSave, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { ModalContainer, ModalHeader, ModalBody, ModalFooter, ModalButton } from './index';

interface CategoryConfirmModalProps {
  categoryName?: string;
  onConfirm?: () => void;
}

export const CategoryConfirmModal: React.FC<CategoryConfirmModalProps> = ({
  categoryName,
  onConfirm,
}) => {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    closeModal();
  };

  return (
    <ModalContainer className="max-w-md">
      <ModalHeader title="Confirmar accion" withBackground />
      <ModalBody withBackground>
        <p className="text-gray-800 text-center">
          {categoryName
            ? `¿Está seguro de agregar la categoría "${categoryName}"?`
            : '¿Está seguro de agregar esta categoría?'}
        </p>
        <ModalFooter>
          <ModalButton icon={FaSave} onClick={handleConfirm}>
            Guardar
          </ModalButton>
          <ModalButton icon={FaTimes} onClick={closeModal}>
            Cancelar
          </ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  );
};
