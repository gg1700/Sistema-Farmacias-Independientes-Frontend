import React, { ReactNode } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { FaTimes } from 'react-icons/fa';

interface ModalContainerProps {
  children: ReactNode;
  className?: string;
  showClose?: boolean;
  onClose?: () => void;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({ 
  children, 
  className = '',
  showClose = true,
  onClose
}) => {
  const { closeModal } = useModal();

  const handleClose = () => {
    if (onClose) onClose();
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="fixed inset-0" onClick={handleClose} />
      
      <div 
        className={`bg-white w-full relative border-2 border-black rounded-lg p-4 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showClose && (
          <div className="flex justify-end mb-3">
            <button
              onClick={handleClose}
              className="bg-[#FA8E83] text-white w-8 h-8 flex items-center justify-center hover:bg-[#e87d72] transition-colors rounded"
              aria-label="Cerrar modal"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};