import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { ApprovalModal } from '../../components/modals/ApprovalModal';

const ApprovalModalExample: React.FC = () => {
  const { openModal } = useModal();
  const [currentStatus, setCurrentStatus] = useState<'cancelled' | 'completed' | null>(null);

  const handleOpenModal = (): void => {
    openModal(
      <ApprovalModal 
        currentStatus={currentStatus}
        onSave={(status) => {
          setCurrentStatus(status);
          console.log('Estado actualizado:', status);
          alert(`✅ Solicitud ${status === 'cancelled' ? 'Cancelada' : 'Completada'}`);
        }}
        buttonText="Actualizar"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-lg font-semibold mb-2">Estado Actual:</h2>
        <p className={`text-xl font-bold ${
          currentStatus === 'cancelled' ? 'text-[#FA8E83]' : 
          currentStatus === 'completed' ? 'text-green-500' : 
          'text-gray-400'
        }`}>
          {currentStatus === 'cancelled' ? 'Cancelada' : 
           currentStatus === 'completed' ? 'Completada' : 
           'Sin seleccionar'}
        </p>
      </div>

      <button
        onClick={handleOpenModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition-colors"
      >
        Abrir
      </button>
    </div>
  );
};

export default ApprovalModalExample;

//