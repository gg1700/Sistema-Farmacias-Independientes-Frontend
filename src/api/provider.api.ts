import { ProviderFilters, ProvidersReportResponse } from '../types/provider.types';

const MOCK_PROVIDERS: ProvidersReportResponse = {
  providers: [
    { id: 1, name: 'FarmaLias', email: 'contacto@farmalias.com', address: 'Av. Blanco Galindo 123', phone: '67676767', isActive: true, createdAt: '2026-07-01' },
    { id: 2, name: 'Bago', email: 'ventas@bago.com', address: 'Av Petrolera 456', phone: '67676767', isActive: true, createdAt: '2026-07-05' },
    { id: 3, name: 'Inti', email: 'info@inti.com', address: 'Av 6 de Agosto 789', phone: '76767677', isActive: false, createdAt: '2026-06-15' },
    { id: 4, name: 'MatziMatziMatzi', email: 'ventas@equiposmed.com', address: 'Tiquipaya 321', phone: '76767676', isActive: true, createdAt: '2026-07-10' }
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