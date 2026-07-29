export interface Purchase {
  id: string | number;
  provider: string;
  date: string;
  product: string;
  quantity: number;
  unitPrice: number;
  expirationDate?: string;
  subtotal: number;
  tax?: number;
  total: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
}

export interface PurchaseFilters {
  startDate?: string;
  endDate?: string;
  provider?: string;
  product?: string;
  status?: string;
}

export interface PurchasesSummary {
  totalPurchases: number;
  totalAmount: number;
  averagePurchase: number;
  totalItems: number;
}

export interface PurchasesReportResponse {
  purchases: Purchase[];
  summary: PurchasesSummary;
  filtersApplied: PurchaseFilters;
}