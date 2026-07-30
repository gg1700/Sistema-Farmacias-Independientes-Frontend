// pages/previews/PurchasesPreview/index.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaChevronDown, FaPrint } from 'react-icons/fa';
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

  const openDatePicker = (inputId: string) => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    input?.focus();
    input?.showPicker?.();
  };

  const filteredPurchases = mockPurchases.filter((purchase) => {
    if (startDate && purchase.date < startDate) return false;
    if (endDate && purchase.date > endDate) return false;
    if (provider && !purchase.provider.toLowerCase().includes(provider.toLowerCase())) return false;
    if (status !== 'Todos' && purchase.status !== status) return false;
    return true;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto bg-background font-first">
      <h1 className="text-4xl font-extrabold text-text leading-tight">Filtrado y Vista</h1>
      <h2 className="text-4xl font-extrabold text-text leading-tight mb-8">Previa de Compras</h2>

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

      </div>

      <h3 className="text-3xl font-extrabold text-center text-text mb-6">Vista Previa de Impresion</h3>

      <div className="rounded-3xl p-2 mb-4 border border-black">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left text-black border-b border-black">
                <th className="px-6 py-4 font-bold">No.</th>
                <th className="px-6 py-4 font-bold">Proveedor</th>
                <th className="px-6 py-4 font-bold">Fecha</th>
                <th className="px-6 py-4 font-bold">Producto</th>
                <th className="px-6 py-4 font-bold">Cantidad</th>
                <th className="px-6 py-4 font-bold">Precio Unitario</th>
                <th className="px-6 py-4 font-bold">Fecha de Vencimiento</th>
                <th className="px-6 py-4 font-bold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {filteredPurchases.map((purchase, index) => (
                <tr key={purchase.id} className="border-b border-black last:border-b-0">
                  <td className="px-6 py-4 text-black">{index + 1}</td>
                  <td className="px-6 py-4 text-black">{purchase.provider}</td>
                  <td className="px-6 py-4 text-black">{purchase.date}</td>
                  <td className="px-6 py-4 text-black">{purchase.product}</td>
                  <td className="px-6 py-4 text-black">{purchase.quantity}</td>
                  <td className="px-6 py-4 text-black">${purchase.unitPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 text-black">{purchase.expirationDate || '-'}</td>
                  <td className="px-6 py-4 text-black">${purchase.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => navigate('/reports/purchases')}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-modals text-text font-semibold shadow hover:bg-modals/90 transition"
        >
          <FaPrint /> Impresion
        </button>
      </div>
    </div>
  );
};

export default PurchasesPreview;
