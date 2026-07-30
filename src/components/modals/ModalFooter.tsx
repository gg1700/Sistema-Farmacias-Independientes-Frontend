import React, { ReactNode } from 'react';

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
  alignment?: 'center' | 'start' | 'end' | 'between';
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ 
  children, 
  className = '',
  alignment = 'center'
}) => {
  const alignClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div className={`flex ${alignClasses[alignment]} gap-4 mt-6 ${className}`}>
      {children}
    </div>
  );
};