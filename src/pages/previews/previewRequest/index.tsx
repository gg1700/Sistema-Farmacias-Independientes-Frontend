// pages/previews/RequestsPreview/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaPrint } from 'react-icons/fa';
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

  const filteredRequests = mockRequests.filter((request) => {
    if (startDate && request.requestDate < startDate) return false;
    if (endDate && request.requestDate > endDate) return false;
    if (provider && !request.provider?.toLowerCase().includes(provider.toLowerCase())) return false;
    if (status !== 'Todos' && request.status !== status) return false;
    return true;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <div className="bg-[#F4F4F4] rounded-3xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Filtrado y Vista</h1>
            <h2 className="text-2xl font-semibold text-slate-900">Previa de Solicitudes</h2>
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
              <span className="font-semibold text-slate-700">Proveedor</span>
              <input
                type="text"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                placeholder="Buscar proveedor"
                className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-slate-700">Estado</span>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
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
            onClick={() => navigate('/reports/requests')}
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
                <th className="px-6 py-4 border border-slate-300">Proveedor</th>
                <th className="px-6 py-4 border border-slate-300">Fecha de Registro</th>
                <th className="px-6 py-4 border border-slate-300">Descripción</th>
                <th className="px-6 py-4 border border-slate-300">Estado</th>
                <th className="px-6 py-4 border border-slate-300 rounded-tr-3xl">Productos</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request, index) => (
                <tr key={request.id} className="odd:bg-[#F7F2DD] even:bg-[#EFE8C9]">
                  <td className="px-6 py-4 border border-slate-300">{index + 1}</td>
                  <td className="px-6 py-4 border border-slate-300">{request.provider}</td>
                  <td className="px-6 py-4 border border-slate-300">{request.requestDate}</td>
                  <td className="px-6 py-4 border border-slate-300">{request.description}</td>
                  <td className="px-6 py-4 border border-slate-300">{request.status}</td>
                  <td className="px-6 py-4 border border-slate-300">{request.product}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestsPreview;
