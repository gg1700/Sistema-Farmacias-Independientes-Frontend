import { FaCheck, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { ModalContainer, ModalHeader, ModalBody, ModalFooter, ModalField, ModalButton } from './index';

interface SupplyRequestConfirmModalProps {
  proveedor: string;
  descripcion: string;
  nombreProducto: string;
  cantidad: string;
  onConfirm?: () => void;
}

export const SupplyRequestConfirmModal: React.FC<SupplyRequestConfirmModalProps> = ({
  proveedor,
  descripcion,
  nombreProducto,
  cantidad,
  onConfirm,
}) => {
  const { closeModal } = useModal();

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    closeModal();
  };

  return (
    <ModalContainer className="max-w-lg">
      <ModalHeader title="Confirmar Solicitud" withBackground />
      <ModalBody withBackground>
        <div className="space-y-3">
          <ModalField label="Proveedor" value={proveedor} />
          <ModalField label="Descripción" value={descripcion} />
          <ModalField label="Nombre del Producto" value={nombreProducto} />
          <ModalField label="Cantidad" value={cantidad} />
        </div>
        <ModalFooter>
          <ModalButton icon={FaCheck} onClick={handleConfirm}>
            Confirmar
          </ModalButton>
          <ModalButton icon={FaTimes} onClick={closeModal}>
            Cerrar
          </ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  );
};
