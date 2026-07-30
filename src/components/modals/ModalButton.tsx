import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';

interface ModalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProps>(({ 
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'bg-[#D4D1D1] hover:bg-[#c5c2c2] text-gray-700 font-medium transition-colors flex items-center gap-2 border border-white rounded';
  
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-8 py-2 text-base',
    lg: 'px-10 py-3 text-lg',
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />
      )}
      {children}
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
});

ModalButton.displayName = 'ModalButton';