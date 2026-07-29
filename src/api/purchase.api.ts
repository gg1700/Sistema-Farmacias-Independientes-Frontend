import { PurchaseFilters, PurchasesReportResponse } from '../types/purchase.types';

const MOCK_PURCHASES: PurchasesReportResponse = {
  purchases: [
    { id: 1, provider: 'Distribuidora Médica SA', date: '2026-07-25', product: 'Jeringas 3ml', quantity: 500, unitPrice: 2.50, expirationDate: '2028-07-25', subtotal: 1250.00, tax: 150.00, total: 1400.00, status: 'COMPLETED' },
    { id: 2, provider: 'Laboratorios FarmaPlus', date: '2026-07-24', product: 'Paracetamol 500mg', quantity: 1000, unitPrice: 1.20, expirationDate: '2027-12-31', subtotal: 1200.00, tax: 144.00, total: 1344.00, status: 'COMPLETED' },
    { id: 3, provider: 'Insumos Quirúrgicos SL', date: '2026-07-23', product: 'Gasas Estériles', quantity: 200, unitPrice: 3.75, expirationDate: '2029-01-15', subtotal: 750.00, tax: 90.00, total: 840.00, status: 'PENDING' },
    { id: 4, provider: 'Distribuidora Médica SA', date: '2026-07-22', product: 'Guantes Quirúrgicos', quantity: 300, unitPrice: 4.50, expirationDate: '2028-03-20', subtotal: 1350.00, tax: 162.00, total: 1512.00, status: 'COMPLETED' }
  ],
  summary: {
    totalPurchases: 4,
    totalAmount: 5096.00,
    averagePurchase: 1274.00,
    totalItems: 2000
  },
  filtersApplied: {}
};

export const getPurchasesReport = async (filters: PurchaseFilters): Promise<PurchasesReportResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = { ...MOCK_PURCHASES };
      
      if (filters.startDate) {
        filtered.purchases = filtered.purchases.filter(
          p => p.date >= filters.startDate!
        );
      }
      
      if (filters.endDate) {
        filtered.purchases = filtered.purchases.filter(
          p => p.date <= filters.endDate!
        );
      }
      
      if (filters.provider) {
        const search = filters.provider.toLowerCase();
        filtered.purchases = filtered.purchases.filter(
          p => p.provider.toLowerCase().includes(search)
        );
      }
      
      if (filters.product) {
        const search = filters.product.toLowerCase();
        filtered.purchases = filtered.purchases.filter(
          p => p.product.toLowerCase().includes(search)
        );
      }
      
      if (filters.status) {
        filtered.purchases = filtered.purchases.filter(
          p => p.status === filters.status
        );
      }
      
      resolve(filtered);
    }, 500);
  });
};