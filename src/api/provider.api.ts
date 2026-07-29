import { ProviderFilters, ProvidersReportResponse } from '../types/provider.types';

const MOCK_PROVIDERS: ProvidersReportResponse = {
  providers: [
    { id: 1, name: 'Distribuidora Médica SA', email: 'contacto@distribuidora.com', address: 'Av. Principal 123', phone: '555-1234', isActive: true, createdAt: '2026-07-01' },
    { id: 2, name: 'Laboratorios FarmaPlus', email: 'ventas@farmaplus.com', address: 'Calle Secundaria 456', phone: '555-5678', isActive: true, createdAt: '2026-07-05' },
    { id: 3, name: 'Insumos Quirúrgicos SL', email: 'info@insumosq.com', address: 'Blvd. Industrial 789', phone: '555-9012', isActive: false, createdAt: '2026-06-15' },
    { id: 4, name: 'Distribuidora de Equipos Médicos', email: 'ventas@equiposmed.com', address: 'Zona Franca 321', phone: '555-3456', isActive: true, createdAt: '2026-07-10' }
  ],
  summary: {
    totalProviders: 4,
    activeProviders: 3,
    inactiveProviders: 1,
    newThisMonth: 3
  },
  filtersApplied: {}
};

export const getProvidersReport = async (filters: ProviderFilters): Promise<ProvidersReportResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = { ...MOCK_PROVIDERS };
      
      if (filters.startDate) {
        filtered.providers = filtered.providers.filter(
          p => p.createdAt >= filters.startDate!
        );
      }
      
      if (filters.endDate) {
        filtered.providers = filtered.providers.filter(
          p => p.createdAt <= filters.endDate!
        );
      }
      
      if (filters.isActive !== undefined) {
        filtered.providers = filtered.providers.filter(
          p => p.isActive === filters.isActive
        );
      }
      
      if (filters.search) {
        const search = filters.search.toLowerCase();
        filtered.providers = filtered.providers.filter(
          p => p.name.toLowerCase().includes(search) || 
               p.email.toLowerCase().includes(search)
        );
      }
      
      // Update summary
      filtered.summary.totalProviders = filtered.providers.length;
      filtered.summary.activeProviders = filtered.providers.filter(p => p.isActive).length;
      filtered.summary.inactiveProviders = filtered.providers.filter(p => !p.isActive).length;
      
      resolve(filtered);
    }, 500);
  });
};

export const exportProvidersReport = async (format: 'PDF' | 'EXCEL', data: any) => {
  console.log(`Exporting providers report to ${format}`, data);
};