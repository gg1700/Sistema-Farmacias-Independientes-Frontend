// pages/previews/RequestsPreview/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaChevronDown, FaPrint } from 'react-icons/fa';
import { Request } from '../../../types/request.types';

const mockRequests: Request[] = [
  { id: 1, requester: 'Dr. Pérez', provider: 'Distribuidora Médica SA', department: 'Farmacia', product: 'Amoxicilina 500mg', description: 'Medicamento para pacientes', quantity: 200, priority: 'HIGH', status: 'En Espera', requestDate: '2026-07-25', requiredDate: '2026-07-28' },
  { id: 2, requester: 'Dr. Gómez', provider: 'Laboratorios FarmaPlus', department: 'Urgencias', product: 'Sueros IV', description: 'Sueros para trauma', quantity: 50, priority: 'MEDIUM', status: 'Confirmada', requestDate: '2026-07-24', requiredDate: '2026-07-27' },
  { id: 3, requester: 'Dr. Martínez', provider: 'Insumos Quirúrgicos SL', department: 'Cirugía', product: 'Guantes Estériles', description: 'Guantes para cirugía', quantity: 300, priority: 'HIGH', status: 'Confirmada', requestDate: '2026-07-23', requiredDate: '2026-07-25' },
  { id: 4, requester: 'Dra. Rodríguez', provider: 'Distribuidora Médica SA', department: 'Pediatría', product: 'Paracetamol Infantil', description: 'Medicamento pediátrico', quantity: 150, priority: 'LOW', status: 'En Espera', requestDate: '2026-07-22', requiredDate: '2026-07-30' }
];

const statusOptions = ['Todos', 'En Espera', 'Confirmada'];

const RequestsPreview: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [provider, setProvider] = useState('');
  const [status, setStatus] = useState('Todos');

  const openDatePicker = (inputId: string) => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    input?.focus();
    input?.showPicker?.();
  };

  const filteredRequests = mockRequests.filter((request) => {
    if (startDate && request.requestDate < startDate) return false;
    if (endDate && request.requestDate > endDate) return false;
    if (provider && !request.provider?.toLowerCase().includes(provider.toLowerCase())) return false;
    if (status !== 'Todos' && request.status !== status) return false;
    return true;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto bg-background font-first">
      <h1 className="text-4xl font-extrabold text-text leading-tight">Filtrado y Vista</h1>
      <h2 className="text-4xl font-extrabold text-text leading-tight mb-8">Previa de Solicitudes</h2>

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
          <label htmlFor="provider" className="text-2xl font-bold text-text whitespace-nowrap">
            Proveedor
          </label>
          <div className="flex-1 relative">
            <input
              id="provider"
              type="text"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="Buscar proveedor"
              className="w-full h-12 rounded-md bg-secondary px-4 text-fields outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 md:col-span-1">
          <label htmlFor="status" className="text-2xl font-bold text-text whitespace-nowrap">
            Estado
          </label>
          <div className="relative w-64">
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full h-12 appearance-none rounded-md bg-secondary px-4 pr-10 text-fields outline-none"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
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
                <th className="px-6 py-4 font-bold">Proveedor</th>
                <th className="px-6 py-4 font-bold">Fecha de Registro</th>
                <th className="px-6 py-4 font-bold">Descripción</th>
                <th className="px-6 py-4 font-bold">Estado</th>
                <th className="px-6 py-4 font-bold">Productos</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request, index) => (
                <tr key={request.id} className="border-b border-black last:border-b-0">
                  <td className="px-6 py-4 text-black">{index + 1}</td>
                  <td className="px-6 py-4 text-black">{request.provider}</td>
                  <td className="px-6 py-4 text-black">{request.requestDate}</td>
                  <td className="px-6 py-4 text-black">{request.description}</td>
                  <td className="px-6 py-4 text-black">{request.status}</td>
                  <td className="px-6 py-4 text-black">{request.product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/reports/requests')}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-modals text-text font-semibold shadow hover:bg-modals/90 transition"
        >
          <FaPrint /> Impresion
        </button>
      </div>
    </div>
  );
};

export default RequestsPreview;
