import { useState, useEffect, useCallback } from 'react';
import { getProvidersReport } from '../api/provider.api';
import { ProviderFilters, ProvidersReportResponse } from '../types/provider.types';

export const useProvidersReport = () => {
  const [data, setData] = useState<ProvidersReportResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProviderFilters>({});

  const loadReport = useCallback(async (appliedFilters: ProviderFilters = filters) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getProvidersReport(appliedFilters);
      setData(response);
    } catch (err) {
      setError('Error loading providers report');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const updateFilters = useCallback((newFilters: Partial<ProviderFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const applyFilters = useCallback(() => {
    loadReport(filters);
  }, [loadReport, filters]);

  const clearFilters = useCallback(() => {
    setFilters({});
    loadReport({});
  }, [loadReport]);

  useEffect(() => {
    loadReport();
  }, [loadReport]);

  return {
    data,
    loading,
    error,
    filters,
    updateFilters,
    applyFilters,
    clearFilters,
    reload: loadReport
  };
};