// pages/reports/ProvidersReport/index.tsx
import React from 'react';
import { useProvidersReport } from '../../../hooks/useProvidersReport';
//import './styles.css';

const ProvidersReport: React.FC = () => {
  const {
    data,
    loading,
    error,
    filters,
    updateFilters,
    applyFilters,
    clearFilters
  } = useProvidersReport();

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="reporte-proveedores">
      {/* Header con título y botones */}
      <div className="report-header">
        <h1>Reporte de Proveedores</h1>
        <div className="header-buttons">
          <button className="btn-help">Ayuda</button>
          <button className="btn-back">Volver Atras</button>
        </div>
      </div>

      {/* Sección de filtros */}
      <div className="filtros-section">
        <div className="filtro-columna">
          <h3>Solicitudes de Insumos</h3>
          <button className="filtro-boton">Ver Proveedores</button>
          <button className="filtro-boton">Registrados</button>
        </div>

        <div className="filtro-columna">
          <h3>Detalle de Proveedores</h3>
          <div className="filtro-fecha">
            <label>De</label>
            <input 
              type="date" 
              value={filters.startDate || ''}
              onChange={(e) => updateFilters({ startDate: e.target.value })}
            />
            <label>a</label>
            <input 
              type="date"
              value={filters.endDate || ''}
              onChange={(e) => updateFilters({ endDate: e.target.value })}
            />
          </div>
        </div>

        <div className="filtro-columna">
          <h3>Pagina</h3>
          <div className="filtro-fecha">
            <label>Fecha</label>
            <input 
              type="date"
              value={filters.startDate || ''}
              onChange={(e) => updateFilters({ startDate: e.target.value })}
            />
          </div>
        </div>

        <div className="filtro-columna">
          <h3>Responsable</h3>
          <input 
            type="text"
            placeholder="Responsable"
            className="input-responsable"
          />
        </div>
      </div>

      {/* Tabla */}
      <div className="tabla-section">
        <h3>Detalle de Proveedores</h3>
        <div className="tabla-container">
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
              {loading ? (
                <tr><td colSpan={6} className="cargando">Cargando...</td></tr>
              ) : data?.providers.length === 0 ? (
                <tr><td colSpan={6} className="sin-datos">No hay datos</td></tr>
              ) : (
                data?.providers.map((provider, index) => (
                  <tr key={provider.id}>
                    <td>{index + 1}</td>
                    <td>{provider.name}</td>
                    <td>{provider.email}</td>
                    <td>{provider.address}</td>
                    <td>{provider.phone}</td>
                    <td>
                      <span className={provider.isActive ? 'activo' : 'inactivo'}>
                        {provider.isActive ? '✓' : '✗'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProvidersReport;