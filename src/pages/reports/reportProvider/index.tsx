// pages/reports/ProvidersReport/index.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import { useProvidersReport } from '../../../hooks/useProvidersReport';

const ProvidersReport: React.FC = () => {
  const { data, loading, error, filters, updateFilters } = useProvidersReport();
  const [responsible, setResponsible] = useState('');

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white border border-black rounded-lg shadow-sm">
        <div className="px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-black/10 pb-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border border-black bg-[#EEF4EE] flex items-center justify-center text-center text-sm font-bold text-[#0C6441] leading-tight">
                Farmacia<br />Angélica
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Reporte de Proveedores</p>
                <h1 className="text-3xl font-bold text-slate-900 mt-2">Detalle de Proveedores</h1>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
              <div>
                <p className="text-sm font-semibold text-slate-700">Pagina</p>
                <div className="mt-2 h-12 rounded-md bg-slate-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Fecha</p>
                <div className="mt-2 h-12 rounded-md bg-slate-300" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-center">
                <span className="font-semibold text-slate-800">Responsable</span>
                <div className="w-full px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[52px] flex items-center">
                  <span className="text-slate-400">{responsible || "Responsable"}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 items-center">
                <span className="font-semibold text-slate-800">De</span>
                <div className="px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[52px] flex items-center">
                  <span className="text-slate-400">{filters.startDate || "XX/XX/XX"}</span>
                </div>
                <span className="font-semibold text-slate-800">a</span>
                <div className="px-4 py-3 border border-slate-300 rounded-md bg-white text-slate-800 min-h-[52px] flex items-center">
                  <span className="text-slate-400">{filters.endDate || "XX/XX/XX"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto border border-black rounded-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">No.</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Nombre</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Correo Electrónico</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Dirección</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Teléfono</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Activo</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">Cargando...</td>
                  </tr>
                ) : !data || data.providers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-10 text-center text-slate-500">No hay datos</td>
                  </tr>
                ) : (
                  data?.providers?.map((provider, index) => (
                    <tr key={provider.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 border border-black text-sm">{index + 1}</td>
                      <td className="px-5 py-4 border border-black text-sm">{provider.name}</td>
                      <td className="px-5 py-4 border border-black text-sm">{provider.email}</td>
                      <td className="px-5 py-4 border border-black text-sm">{provider.address}</td>
                      <td className="px-5 py-4 border border-black text-sm">{provider.phone}</td>
                      <td className="px-5 py-4 border border-black text-sm">
                        <span
                          className={`inline-flex h-3.5 w-3.5 rounded-full ${provider.isActive ? 'bg-green-500' : 'bg-red-500'}`}
                          aria-label={provider.isActive ? 'Activo' : 'Inactivo'}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

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

export default ProvidersReport;
