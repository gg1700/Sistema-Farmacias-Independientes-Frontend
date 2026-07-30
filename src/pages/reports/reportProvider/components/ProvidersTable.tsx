// pages/reports/ProvidersReport/components/ProvidersTable.tsx
import React from 'react';
import { Provider } from '../../../../types/provider.types';

interface ProvidersTableProps {
  data: Provider[];
  loading?: boolean;
}

export const ProvidersTable: React.FC<ProvidersTableProps> = ({ data, loading = false }) => {
  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={6} className="no-data">No hay datos</td>
            </tr>
          ) : (
            data.map((provider, index) => (
              <tr key={provider.id}>
                <td>{index + 1}</td>
                <td>{provider.name}</td>
                <td>{provider.email}</td>
                <td>{provider.address}</td>
                <td>{provider.phone}</td>
                <td>
                  <span className={provider.isActive ? 'active' : 'inactive'}>
                    {provider.isActive ? '✓' : '✗'}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};