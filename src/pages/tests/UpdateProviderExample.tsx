// src/pages/tests/ModalUpdateProviderExample.tsx
import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import { ModalUpdateProvider } from '../../components/modals/UpdateProviderModal';

const ModalUpdateProviderExample: React.FC = () => {
  const { openModal } = useModal();

  // Datos del proveedor (ejemplo)
  const providerData = {
    nombre: 'Laboratorios Pfizer',
    direccion: 'Av. Principal #123, Col. Centro',
    telefono: '+52 55 1234 5678',
    correo: 'contacto@pfizer.com.mx'
  };

  const handleOpenModal = (): void => {
    openModal(
      <ModalUpdateProvider 
        data={providerData}
        onSave={(updatedData) => {
          // Logica de guardado
        }}
        buttonText="Actualizar"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={handleOpenModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
      >
        Abrir
      </button>
    </div>
  );
};

export default ModalUpdateProviderExample;