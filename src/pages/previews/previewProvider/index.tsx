// pages/previews/ProvidersPreview/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaPrint } from 'react-icons/fa';
import { mockProviders } from '../../../mocks/data';

const ProvidersPreview: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const providers = mockProviders;

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <div className="bg-[#F4F4F4] rounded-3xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Filtrado y Vista</h1>
            <h2 className="text-2xl font-semibold text-slate-900">Previa de Proveedores</h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="startDate" className="font-semibold text-slate-700">Fecha de Inicio</label>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-100 border border-slate-200">
                  <FaCalendarAlt className="text-slate-500" />
                  <input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-transparent outline-none text-slate-700"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="endDate" className="font-semibold text-slate-700">Fecha de Fin</label>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-100 border border-slate-200">
                  <FaCalendarAlt className="text-slate-500" />
                  <input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-transparent outline-none text-slate-700"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-700">Activo</span>
              <select className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700">
                <option>Activo</option>
                <option>Inactivo</option>
                <option>Todos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2EDD7] rounded-3xl border border-slate-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-semibold text-slate-900">Vista Previa de Impresion</h3>
          <button
            type="button"
            onClick={() => navigate('/reports/suppliers')}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
          >
            <FaPrint /> Impresion
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-[#F7F2DD] rounded-3xl overflow-hidden">
            <thead>
              <tr className="text-left text-slate-900">
                <th className="px-6 py-4 border border-slate-300 rounded-tl-3xl">No.</th>
                <th className="px-6 py-4 border border-slate-300">Nombre</th>
                <th className="px-6 py-4 border border-slate-300">Correo Electronico</th>
                <th className="px-6 py-4 border border-slate-300">Direccion</th>
                <th className="px-6 py-4 border border-slate-300">Telefono</th>
                <th className="px-6 py-4 border border-slate-300 rounded-tr-3xl">Activo</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider, index) => (
                <tr key={provider.id} className="odd:bg-[#F7F2DD] even:bg-[#EFE8C9]">
                  <td className="px-6 py-4 border border-slate-300">{index + 1}</td>
                  <td className="px-6 py-4 border border-slate-300">{provider.name}</td>
                  <td className="px-6 py-4 border border-slate-300">{provider.email}</td>
                  <td className="px-6 py-4 border border-slate-300">{provider.address}</td>
                  <td className="px-6 py-4 border border-slate-300">{provider.phone}</td>
                  <td className="px-6 py-4 border border-slate-300">
                    <span className={`inline-flex h-3.5 w-3.5 rounded-full ${provider.isActive ? 'bg-green-500' : 'bg-red-500'}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProvidersPreview;
