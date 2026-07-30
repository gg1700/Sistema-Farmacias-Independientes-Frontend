// hooks/usePurchasesReport.ts
import { useState, useEffect, useCallback } from 'react';
import { getPurchasesReport } from '../api/purchase.api';
import { PurchaseFilters, PurchasesReportResponse } from '../types/purchase.types';

export const usePurchasesReport = () => {
  const [data, setData] = useState<PurchasesReportResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<PurchaseFilters>({});

  const loadReport = useCallback(async (appliedFilters: PurchaseFilters = filters) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPurchasesReport(appliedFilters);
      setData(response);
    } catch (err) {
      setError('Error loading purchases report');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const updateFilters = useCallback((newFilters: Partial<PurchaseFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  useEffect(() => {
    loadReport();
  }, [loadReport]);

  return {
    data,
    loading,
    error,
    filters,
    updateFilters,
    reload: loadReport
  };
};