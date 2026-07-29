import { RequestFilters, RequestsReportResponse } from '../types/request.types';

const MOCK_REQUESTS: RequestsReportResponse = {
  requests: [
    { id: 1, requester: 'Dr. Pérez', department: 'Farmacia', product: 'Amoxicilina 500mg', quantity: 200, priority: 'HIGH', status: 'PENDING', requestDate: '2026-07-25', requiredDate: '2026-07-28', comments: 'Urgente para pacientes' },
    { id: 2, requester: 'Dr. Gómez', department: 'Urgencias', product: 'Sueros', quantity: 50, priority: 'MEDIUM', status: 'APPROVED', requestDate: '2026-07-24', requiredDate: '2026-07-27', comments: '' },
    { id: 3, requester: 'Dr. Martínez', department: 'Cirugía', product: 'Guantes Estériles', quantity: 300, priority: 'HIGH', status: 'FULFILLED', requestDate: '2026-07-23', requiredDate: '2026-07-25', comments: 'Pedido completado' },
    { id: 4, requester: 'Dra. Rodríguez', department: 'Pediatría', product: 'Paracetamol Infantil', quantity: 150, priority: 'LOW', status: 'REJECTED', requestDate: '2026-07-22', requiredDate: '2026-07-30', comments: 'Sin stock disponible' }
  ],
  summary: {
    totalRequests: 4,
    pendingRequests: 1,
    approvedRequests: 1,
    rejectedRequests: 1,
    fulfilledRequests: 1
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
      
      if (filters.priority) {
        filtered.requests = filtered.requests.filter(
          r => r.priority === filters.priority
        );
      }
      
      if (filters.department) {
        const search = filters.department.toLowerCase();
        filtered.requests = filtered.requests.filter(
          r => r.department.toLowerCase().includes(search)
        );
      }
      
      resolve(filtered);
    }, 500);
  });
};