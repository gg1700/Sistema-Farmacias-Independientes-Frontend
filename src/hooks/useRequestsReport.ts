// hooks/useRequestsReport.ts
import { useState, useEffect, useCallback } from 'react';
import { getRequestsReport } from '../api/request.api';
import { RequestFilters, RequestsReportResponse } from '../types/request.types';

export const useRequestsReport = () => {
  const [data, setData] = useState<RequestsReportResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<RequestFilters>({});

  const loadReport = useCallback(async (appliedFilters: RequestFilters = filters) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getRequestsReport(appliedFilters);
      setData(response);
    } catch (err) {
      setError('Error loading requests report');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const updateFilters = useCallback((newFilters: Partial<RequestFilters>) => {
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