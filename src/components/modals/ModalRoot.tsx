import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '../../contexts/ModalContext';

export const ModalRoot: React.FC = () => {
  const { isOpen, content, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !content) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 transition-opacity"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-2xl animate-in fade-in zoom-in duration-200">
        {content}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};