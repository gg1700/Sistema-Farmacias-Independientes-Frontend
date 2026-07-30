// pages/reports/RequestsReport/index.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import { useRequestsReport } from '../../../hooks/useRequestsReport';

const RequestsReport: React.FC = () => {
  const { data, loading, error, filters } = useRequestsReport();
  const [responsible, setResponsible] = useState('');

  if (error) {
    return <div className="text-danger p-4">{error}</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-background font-first">
      <div className="bg-background border border-text rounded-lg shadow-sm">
        <div className="px-8 pt-1 pb-8">
          <div className="flex justify-between items-start mb-2">
            <div className="w-20 h-20 rounded-full border border-text bg-secondary flex items-center justify-center text-center text-xs font-bold text-primary leading-tight">
              Farmacia<br />Angélica
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-fields">Pagina</span>
                <div className="h-7 w-20 rounded-md bg-secondary" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-fields">Fecha</span>
                <div className="h-7 w-20 rounded-md bg-secondary" />
              </div>
            </div>
          </div>

          <div className="text-center mb-3">
            <h1 className="text-2xl font-bold text-text">Detalle de Solicitudes de Proveedor</h1>
          </div>

          <div className="flex justify-center mb-3">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-text">De</span>
              <div className="px-3 py-1.5 border border-secondary rounded-md bg-background text-text min-h-[36px] flex items-center">
                <span className="text-sm text-fields">{filters.startDate || '__/__/__'}</span>
              </div>
              <span className="font-semibold text-text">a</span>
              <div className="px-3 py-1.5 border border-secondary rounded-md bg-background text-text min-h-[36px] flex items-center">
                <span className="text-sm text-fields">{filters.endDate || '__/__/__'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-semibold text-text">Responsable</span>
            <div className="px-3 py-1.5 border border-secondary rounded-md bg-background text-text min-h-[36px] flex-1 max-w-xs">
              <span className="text-sm text-fields">{responsible || 'Responsable'}</span>
            </div>
          </div>

          <div className="overflow-x-auto border border-black rounded-md mb-5">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-black text-left text-sm font-semibold text-black">No.</th>
                  <th className="px-4 py-2 border border-black text-left text-sm font-semibold text-black">Proveedor</th>
                  <th className="px-4 py-2 border border-black text-left text-sm font-semibold text-black">Fecha de Registro</th>
                  <th className="px-4 py-2 border border-black text-left text-sm font-semibold text-black">Descripción</th>
                  <th className="px-4 py-2 border border-black text-left text-sm font-semibold text-black">Estado</th>
                  <th className="px-4 py-2 border border-black text-left text-sm font-semibold text-black">Productos</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-black">Cargando...</td>
                  </tr>
                ) : !data || data.requests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-black">No hay datos</td>
                  </tr>
                ) : (
                  data?.requests?.map((request, index) => (
                    <tr key={request.id}>
                      <td className="px-4 py-2 border border-black text-sm text-black">{index + 1}</td>
                      <td className="px-4 py-2 border border-black text-sm text-black">{request.provider || request.requester}</td>
                      <td className="px-4 py-2 border border-black text-sm text-black">{request.requestDate}</td>
                      <td className="px-4 py-2 border border-black text-sm text-black">{request.description || request.product}</td>
                      <td className="px-4 py-2 border border-black text-sm text-black">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium
                          ${request.status === 'En Espera' || request.status === 'PENDING' ? 'bg-modals text-black' : ''}
                          ${request.status === 'Confirmada' || request.status === 'APPROVED' ? 'bg-secondary text-black' : ''}
                          ${request.status === 'Rechazada' || request.status === 'REJECTED' ? 'bg-danger text-black' : ''}
                          ${request.status === 'FULFILLED' ? 'bg-primary text-black' : ''}
                        `}>
                          {request.status === 'En Espera' || request.status === 'PENDING' ? 'En Espera' :
                           request.status === 'Confirmada' || request.status === 'APPROVED' ? 'Confirmada' :
                           request.status === 'Rechazada' || request.status === 'REJECTED' ? 'Rechazada' :
                           request.status || 'En Espera'}
                        </span>
                      </td>
                      <td className="px-4 py-2 border border-black text-sm text-black">{request.quantity || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-6">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-2 bg-modals border border-text rounded-md font-semibold text-text hover:bg-modals/90 transition text-sm"
            >
              <FaArrowLeft className="text-sm" /> Volver
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-2 bg-modals border border-text rounded-md font-semibold text-text hover:bg-modals/90 transition text-sm"
            >
              <FaPrint className="text-sm" /> Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsReport;