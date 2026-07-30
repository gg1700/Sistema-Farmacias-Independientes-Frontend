import React, { ReactNode } from 'react';

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ 
  children, 
  className = '',
  withBackground = true
}) => {
  return (
    <div className={`${withBackground ? 'bg-[#C7C19E]/40' : ''} px-6 py-4 rounded-b ${className}`}>
      {children}
    </div>
  );
};