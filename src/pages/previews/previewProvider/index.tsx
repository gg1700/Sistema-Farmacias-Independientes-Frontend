// pages/previews/ProvidersPreview/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaChevronDown, FaPrint } from 'react-icons/fa';
import { mockProviders } from '../../../mocks/data';

const ProvidersPreview: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('Activo');
  const providers = mockProviders;

  const openDatePicker = (inputId: string) => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    input?.focus();
    input?.showPicker?.();
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-background font-first">
      <h1 className="text-4xl font-extrabold text-text leading-tight">Filtrado y Vista</h1>
      <h2 className="text-4xl font-extrabold text-text leading-tight mb-8">Previa de Proveedores</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-10">
        <div className="flex items-center gap-4">
          <label htmlFor="startDate" className="text-2xl font-bold text-text whitespace-nowrap">
            Fecha de Inicio
          </label>
          <div className="flex-1 relative">
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full h-12 rounded-md bg-secondary px-4 text-fields outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => openDatePicker('startDate')}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-primary text-background shrink-0"
          >
            <FaCalendarAlt />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="endDate" className="text-2xl font-bold text-text whitespace-nowrap">
            Fecha de Fin
          </label>
          <div className="flex-1 relative">
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full h-12 rounded-md bg-secondary px-4 text-fields outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => openDatePicker('endDate')}
            className="flex items-center justify-center h-11 w-11 rounded-full bg-primary text-background shrink-0"
          >
            <FaCalendarAlt />
          </button>
        </div>

        <div className="flex items-center gap-4 md:col-span-1">
          <label htmlFor="status" className="text-2xl font-bold text-text whitespace-nowrap">
            Activo
          </label>
          <div className="relative w-64">
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full h-12 appearance-none rounded-md bg-secondary px-4 pr-10 text-fields outline-none"
            >
              <option>Activo</option>
              <option>Inactivo</option>
              <option>Todos</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-fields" />
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-extrabold text-center text-text mb-6">Vista Previa de Impresion</h3>

      <div className="rounded-3xl p-2 mb-4 border border-black">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left text-black border-b border-black">
                <th className="px-6 py-4 font-bold">No.</th>
                <th className="px-6 py-4 font-bold">Nombre</th>
                <th className="px-6 py-4 font-bold">Correo Electronico</th>
                <th className="px-6 py-4 font-bold">Direccion</th>
                <th className="px-6 py-4 font-bold">Telefono</th>
                <th className="px-6 py-4 font-bold">Activo</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider, index) => (
                <tr key={provider.id} className="border-b border-black last:border-b-0">
                  <td className="px-6 py-4 text-black">{index + 1}</td>
                  <td className="px-6 py-4 text-black">{provider.name}</td>
                  <td className="px-6 py-4 text-black">{provider.email}</td>
                  <td className="px-6 py-4 text-black">{provider.address}</td>
                  <td className="px-6 py-4 text-black">{provider.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex h-3.5 w-3.5 rounded-full ${provider.isActive ? 'bg-good' : 'bg-danger'}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/reports/suppliers')}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-modals text-text font-semibold shadow hover:bg-modals/90 transition"
        >
          <FaPrint /> Impresion
        </button>
      </div>
    </div>
  );
};

export default ProvidersPreview;