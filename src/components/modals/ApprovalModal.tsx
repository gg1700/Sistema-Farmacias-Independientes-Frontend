import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { useModal } from '../../contexts/ModalContext';
import { 
  ModalContainer, 
  ModalBody, 
  ModalFooter, 
  ModalButton 
} from './index';

interface ApprovalModalProps {
  currentStatus?: 'cancelled' | 'completed' | null;
  onSave?: (status: 'cancelled' | 'completed') => void;
  buttonText?: string;
}

export const ApprovalModal: React.FC<ApprovalModalProps> = ({ 
  currentStatus = null,
  onSave,
  buttonText = 'Actualizar'
}) => {
  const { closeModal } = useModal();
  const [selectedStatus, setSelectedStatus] = useState<'cancelled' | 'completed' | null>(currentStatus);

  const handleSelect = (status: 'cancelled' | 'completed') => {
    setSelectedStatus(status);
  };

  const handleSave = () => {
    if (selectedStatus && onSave) {
      onSave(selectedStatus);
    }
    closeModal();
  };

  return (
    <ModalContainer className="max-w-md">
      <ModalBody withBackground={true}>
        <div className="text-center mb-4">
          <p className="text-gray-800 font-medium text-lg">Estado de Solicitud</p>
        </div>

        <div className="space-y-3 max-w-xs mx-auto">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedStatus === 'cancelled'}
              onChange={() => handleSelect('cancelled')}
              className="w-4 h-4 text-[#FA8E83] border-gray-300 rounded focus:ring-[#FA8E83]"
            />
            <span className="text-gray-800">Cancelada</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedStatus === 'completed'}
              onChange={() => handleSelect('completed')}
              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="text-gray-800">Completada</span>
          </label>
        </div>

        <ModalFooter>
          <ModalButton 
            icon={FaSave}
            onClick={handleSave}
            disabled={!selectedStatus}
          >
            {buttonText}
          </ModalButton>
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