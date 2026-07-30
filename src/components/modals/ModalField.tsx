import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface SelectOption {
  value: string;
  label: string;
}

interface ModalFieldProps {
  label: string;
  value: string | number | null;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  placeholder?: string;
  highlight?: boolean;
  formatValue?: (value: any) => string;
  editable?: boolean;
  onChange?: (value: string) => void;
  type?: 'text' | 'number' | 'date' | 'textarea' | 'select';
  rows?: number;
  options?: SelectOption[];
}

export const ModalField: React.FC<ModalFieldProps> = ({ 
  label, 
  value,
  className = '',
  labelClassName = '',
  valueClassName = '',
  placeholder = '—',
  highlight = false,
  formatValue,
  editable = false,
  onChange,
  type = 'text',
  rows = 2,
  options = []
}) => {
  const [internalValue, setInternalValue] = useState<string>(String(value || ''));

  const displayValue = formatValue ? formatValue(value) : (value || placeholder);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className={`bg-[#D4D1D1] px-3 py-1.5 text-gray-800 text-sm flex-1 rounded focus:outline-none focus:ring-2 focus:ring-[#C7C19E] ${valueClassName}`}
        />
      );
    }

    if (type === 'select') {
      return (
        <div className="relative flex-1">
          <select
            value={internalValue}
            onChange={handleChange}
            className={`bg-[#D4D1D1] px-3 py-1.5 text-gray-800 text-sm w-full rounded focus:outline-none focus:ring-2 focus:ring-[#C7C19E] appearance-none cursor-pointer pr-8 ${valueClassName}`}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-3 h-3" />
        </div>
      );
    }

    return (
      <input
        type={type}
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`bg-[#D4D1D1] px-3 py-1.5 text-gray-800 text-sm flex-1 rounded focus:outline-none focus:ring-2 focus:ring-[#C7C19E] ${valueClassName}`}
      />
    );
  };

  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      <p className={`text-gray-800 text-sm whitespace-nowrap ${labelClassName}`}>
        {label}:
      </p>
      {editable ? (
        renderInput()
      ) : (
        <span className={`bg-[#D4D1D1] px-3 py-1.5 text-gray-800 text-sm flex-1 rounded ${valueClassName}`}>
          {displayValue}
        </span>
      )}
    </div>
  );
};