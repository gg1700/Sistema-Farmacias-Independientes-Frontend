// pages/reports/RequestsReport/index.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import { useRequestsReport } from '../../../hooks/useRequestsReport';

const RequestsReport: React.FC = () => {
  const { data, loading, error, filters, updateFilters } = useRequestsReport();

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white border border-black rounded-lg shadow-sm">
        <div className="px-8 py-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-black/10 pb-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border border-black bg-[#EEF4EE] flex items-center justify-center text-center text-sm font-bold text-[#0C6441] leading-tight">
                Farmacia<br />Angélica
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Reporte de Solicitudes</p>
                <h1 className="text-3xl font-bold text-slate-900 mt-2">Detalle de Solicitudes de Proveedor</h1>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
              <div>
                <p className="text-sm font-semibold text-slate-700">Pagina</p>
                <div className="mt-2 px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[48px] flex items-center">
                  <span className="text-slate-400">{filters.startDate || "__/__/__"}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Fecha</p>
                <div className="mt-2 px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[48px] flex items-center">
                  <span className="text-slate-400">{filters.endDate || "Fecha"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filtros de fecha */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 items-center">
              <span className="font-semibold text-slate-800">De</span>
              <div className="px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[52px] flex items-center">
                <span className="text-slate-400">{filters.startDate || "__/__/__"}</span>
              </div>
              <span className="font-semibold text-slate-800">a</span>
              <div className="px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[52px] flex items-center">
                <span className="text-slate-400">{filters.endDate || "__/__/__"}</span>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto border border-black rounded-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">No.</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Proveedor</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Fecha de Registro</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Descripción</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Estado</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Productos</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">Cargando...</td>
                  </tr>
                ) : !data || data.requests.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">No hay datos</td>
                  </tr>
                ) : (
                  data?.requests?.map((request, index) => (
                    <tr key={request.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 border border-black text-sm">{index + 1}</td>
                      <td className="px-5 py-4 border border-black text-sm">{request.provider || request.requester}</td>
                      <td className="px-5 py-4 border border-black text-sm">{request.requestDate}</td>
                      <td className="px-5 py-4 border border-black text-sm">{request.description || request.product}</td>
                      <td className="px-5 py-4 border border-black text-sm">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                          ${request.status === 'En Espera' || request.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${request.status === 'Confirmada' || request.status === 'APPROVED' ? 'bg-green-100 text-green-800' : ''}
                          ${request.status === 'Rechazada' || request.status === 'REJECTED' ? 'bg-red-100 text-red-800' : ''}
                          ${request.status === 'FULFILLED' ? 'bg-blue-100 text-blue-800' : ''}
                        `}>
                          {request.status === 'En Espera' || request.status === 'PENDING' ? 'En Espera' :
                           request.status === 'Confirmada' || request.status === 'APPROVED' ? 'Confirmada' :
                           request.status === 'Rechazada' || request.status === 'REJECTED' ? 'Rechazada' :
                           request.status || 'En Espera'}
                        </span>
                      </td>
                      <td className="px-5 py-4 border border-black text-sm">{request.quantity || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Botones */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 pb-8">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-8 py-3 bg-[#F2EDD7] border border-black rounded-md font-semibold text-slate-900 hover:bg-[#e4dcc3] transition"
            >
              <FaArrowLeft /> Volver
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-3 px-8 py-3 bg-[#F2EDD7] border border-black rounded-md font-semibold text-slate-900 hover:bg-[#e4dcc3] transition"
            >
              <FaPrint /> Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsReport;