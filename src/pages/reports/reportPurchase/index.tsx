// pages/reports/PurchasesReport/index.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaPrint } from 'react-icons/fa';
import { usePurchasesReport } from '../../../hooks/usePurchasesReport';

const PurchasesReport: React.FC = () => {
  const { data, loading, error, filters, updateFilters } = usePurchasesReport();

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  // Calcular total
  const totalGeneral = data?.purchases?.reduce((sum, item) => sum + item.subtotal, 0) || 0;

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
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600">Reporte de Compras</p>
                <h1 className="text-3xl font-bold text-slate-900 mt-2">Detalle de Compras</h1>
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
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Fecha</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Producto</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Cantidad</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Precio Unitario</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Fecha de Vencimiento</th>
                  <th className="px-5 py-3 border border-black text-left text-sm font-semibold">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="py-10 text-center text-slate-500">Cargando...</td>
                  </tr>
                ) : !data || data.purchases.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-10 text-center text-slate-500">No hay datos</td>
                  </tr>
                ) : (
                  data?.purchases?.map((purchase, index) => (
                    <tr key={purchase.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4 border border-black text-sm">{index + 1}</td>
                      <td className="px-5 py-4 border border-black text-sm">{purchase.provider}</td>
                      <td className="px-5 py-4 border border-black text-sm">{purchase.date}</td>
                      <td className="px-5 py-4 border border-black text-sm">{purchase.product}</td>
                      <td className="px-5 py-4 border border-black text-sm">{purchase.quantity}</td>
                      <td className="px-5 py-4 border border-black text-sm">${purchase.unitPrice.toFixed(2)}</td>
                      <td className="px-5 py-4 border border-black text-sm">{purchase.expirationDate || "N/A"}</td>
                      <td className="px-5 py-4 border border-black text-sm">${purchase.subtotal.toFixed(2)}</td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 font-bold">
                  <td colSpan={7} className="px-5 py-4 border border-black text-right text-sm">
                    Total
                  </td>
                  <td className="px-5 py-4 border border-black text-sm">
                    ${totalGeneral.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
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

export default PurchasesReport;