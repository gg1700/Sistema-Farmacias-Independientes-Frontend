export interface Provider {
  id: string | number;
  name: string;
  email: string;
  address: string;
  phone: string;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
  taxId?: string;
  contactPerson?: string;
}

export interface ProviderFilters {
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  search?: string;
}

export interface ProvidersSummary {
  totalProviders: number;
  activeProviders: number;
  inactiveProviders: number;
  newThisMonth: number;
}

export interface ProvidersReportResponse {
  providers: Provider[];
  summary: ProvidersSummary;
  filtersApplied: ProviderFilters;
}