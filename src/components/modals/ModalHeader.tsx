// src/components/modals/ModalHeader.tsx
import React from 'react';

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  withBackground?: boolean;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ 
  title, 
  subtitle,
  className = '',
  withBackground = true
}) => {
  return (
    <div className={`${withBackground ? 'bg-[#C7C19E]/40' : ''} px-6 pt-4 pb-2 ${className}`}>
      <p className="text-gray-800 font-medium">{title}:</p>
      {subtitle && (
        <p className="text-gray-900 font-semibold text-lg">{subtitle}</p>
      )}
    </div>
  );
};