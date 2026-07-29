export interface Request {
  id: string | number;
  requester: string;
  department: string;
  product: string;
  quantity: number;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'FULFILLED';
  requestDate: string;
  requiredDate: string;
  comments?: string;
}

export interface RequestFilters {
  startDate?: string;
  endDate?: string;
  status?: string;
  priority?: string;
  department?: string;
}

export interface RequestsSummary {
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  rejectedRequests: number;
  fulfilledRequests: number;
}

export interface RequestsReportResponse {
  requests: Request[];
  summary: RequestsSummary;
  filtersApplied: RequestFilters;
}