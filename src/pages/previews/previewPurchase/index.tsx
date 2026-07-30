// pages/previews/PurchasesPreview/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaPrint } from 'react-icons/fa';
import { Purchase } from '../../../types/purchase.types';

const mockPurchases: Purchase[] = [
  { id: 1, provider: 'Distribuidora Médica SA', date: '2026-07-25', product: 'Jeringas 3ml', quantity: 500, unitPrice: 2.5, expirationDate: '2028-07-25', subtotal: 1250.0, status: 'Pendiente' },
  { id: 2, provider: 'Laboratorios FarmaPlus', date: '2026-07-24', product: 'Paracetamol 500mg', quantity: 1000, unitPrice: 1.2, expirationDate: '2027-12-31', subtotal: 1200.0, status: 'Recibido' },
  { id: 3, provider: 'Insumos Quirúrgicos SL', date: '2026-07-23', product: 'Gasas Estériles', quantity: 200, unitPrice: 3.75, expirationDate: '2029-01-15', subtotal: 750.0, status: 'Pendiente' },
  { id: 4, provider: 'Distribuidora Médica SA', date: '2026-07-22', product: 'Guantes Quirúrgicos', quantity: 300, unitPrice: 4.5, expirationDate: '2028-03-20', subtotal: 1350.0, status: 'Recibido' }
];

const statusOptions = ['Todos', 'Pendiente', 'Recibido'];

const PurchasesPreview: React.FC = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [provider, setProvider] = useState('');
  const [status, setStatus] = useState('Todos');

  const filteredPurchases = mockPurchases.filter((purchase) => {
    if (startDate && purchase.date < startDate) return false;
    if (endDate && purchase.date > endDate) return false;
    if (provider && !purchase.provider.toLowerCase().includes(provider.toLowerCase())) return false;
    if (status !== 'Todos' && purchase.status !== status) return false;
    return true;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      <div className="bg-[#F4F4F4] rounded-3xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Filtrado y Vista</h1>
            <h2 className="text-2xl font-semibold text-slate-900">Previa de Compras</h2>
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
            onClick={() => navigate('/reports/purchases')}
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
                <th className="px-6 py-4 border border-slate-300">Fecha</th>
                <th className="px-6 py-4 border border-slate-300">Producto</th>
                <th className="px-6 py-4 border border-slate-300">Cantidad</th>
                <th className="px-6 py-4 border border-slate-300">Precio Unitario</th>
                <th className="px-6 py-4 border border-slate-300">Fecha de Vencimiento</th>
                <th className="px-6 py-4 border border-slate-300 rounded-tr-3xl">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {filteredPurchases.map((purchase, index) => (
                <tr key={purchase.id} className="odd:bg-[#F7F2DD] even:bg-[#EFE8C9]">
                  <td className="px-6 py-4 border border-slate-300">{index + 1}</td>
                  <td className="px-6 py-4 border border-slate-300">{purchase.provider}</td>
                  <td className="px-6 py-4 border border-slate-300">{purchase.date}</td>
                  <td className="px-6 py-4 border border-slate-300">{purchase.product}</td>
                  <td className="px-6 py-4 border border-slate-300">{purchase.quantity}</td>
                  <td className="px-6 py-4 border border-slate-300">${purchase.unitPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 border border-slate-300">{purchase.expirationDate || '-'}</td>
                  <td className="px-6 py-4 border border-slate-300">${purchase.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PurchasesPreview;
