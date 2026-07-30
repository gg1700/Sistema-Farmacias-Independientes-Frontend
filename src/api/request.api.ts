// api/request.api.ts
import { RequestFilters, RequestsReportResponse } from '../types/request.types';

const MOCK_REQUESTS: RequestsReportResponse = {
  requests: [
    { id: 1, requester: 'Dr. Pérez', provider: 'Distribuidora Médica SA', department: 'Farmacia', product: 'Amoxicilina 500mg', description: 'Medicamento para pacientes', quantity: 200, priority: 'HIGH', status: 'En Espera', requestDate: '2026-07-25', requiredDate: '2026-07-28' },
    { id: 2, requester: 'Dr. Gómez', provider: 'Laboratorios FarmaPlus', department: 'Urgencias', product: 'Sueros IV', description: 'Sueros para trauma', quantity: 50, priority: 'MEDIUM', status: 'Confirmada', requestDate: '2026-07-24', requiredDate: '2026-07-27' },
    { id: 3, requester: 'Dr. Martínez', provider: 'Insumos Quirúrgicos SL', department: 'Cirugía', product: 'Guantes Estériles', description: 'Guantes para cirugía', quantity: 300, priority: 'HIGH', status: 'Confirmada', requestDate: '2026-07-23', requiredDate: '2026-07-25' },
    { id: 4, requester: 'Dra. Rodríguez', provider: 'Distribuidora Médica SA', department: 'Pediatría', product: 'Paracetamol Infantil', description: 'Medicamento pediátrico', quantity: 150, priority: 'LOW', status: 'En Espera', requestDate: '2026-07-22', requiredDate: '2026-07-30' }
  ],
  summary: {
    totalRequests: 4,
    pendingRequests: 2,
    approvedRequests: 2,
    rejectedRequests: 0,
    fulfilledRequests: 0
  },
  filtersApplied: {}
};

export const getRequestsReport = async (filters: RequestFilters): Promise<RequestsReportResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = { ...MOCK_REQUESTS };
      
      if (filters.startDate) {
        filtered.requests = filtered.requests.filter(
          r => r.requestDate >= filters.startDate!
        );
      }
      
      if (filters.endDate) {
        filtered.requests = filtered.requests.filter(
          r => r.requestDate <= filters.endDate!
        );
      }
      
      if (filters.status) {
        filtered.requests = filtered.requests.filter(
          r => r.status === filters.status
        );
      }
      
      resolve(filtered);
    }, 500);
  });
};