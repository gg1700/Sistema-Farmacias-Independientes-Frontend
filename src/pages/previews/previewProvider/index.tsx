// pages/previews/ProvidersPreview/index.tsx
import React, { useEffect } from 'react';
import { mockProviders } from '../../../mocks/data';
//import './styles.css';

const ProvidersPreview: React.FC = () => {
  // Datos de ejemplo (en producción vendrían de props o contexto)
  const providers = mockProviders;

  // Auto-imprimir al cargar (opcional)
  useEffect(() => {
    // setTimeout(() => window.print(), 500);
  }, []);

  return (
    <div className="preview-proveedores">
      {/* Header con navegación */}
      <div className="preview-header">
        <h1>Filtrado y Vista</h1>
        <h2>Previa de Proveedores</h2>
        <div className="preview-nav">
          <span>Adquisiciones</span>
          <span>Inventario</span>
          <span>Proveedores</span>
        </div>
      </div>

      {/* Sección de filtros (solo visual) */}
      <div className="preview-filtros">
        <div className="preview-filtro-columna">
          <h3>Ver Proveedores Registrados</h3>
          <div className="filtro-item">
            <label>Fecha de Inicio</label>
            <span>__/__/____</span>
          </div>
          <div className="filtro-item">
            <label>Activo</label>
            <span>✓</span>
          </div>
        </div>

        <div className="preview-filtro-columna">
          <h3>Solicitudes de Insumos</h3>
          <div className="filtro-item">
            <label>Fecha de Fin</label>
            <span>__/__/____</span>
          </div>
        </div>

        <div className="preview-filtro-columna">
          <h3>Ver Existencias</h3>
          <div className="filtro-item">
            <label>Fecha de Fin</label>
            <span>__/__/____</span>
          </div>
        </div>
      </div>

      {/* Tabla para impresión */}
      <div className="preview-tabla">
        <h3>Vista Previa de Impresión</h3>
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
            {providers.map((provider, index) => (
              <tr key={provider.id}>
                <td>{index + 1}</td>
                <td>{provider.name}</td>
                <td>{provider.email}</td>
                <td>{provider.address}</td>
                <td>{provider.phone}</td>
                <td>{provider.isActive ? 'Activo' : 'Inactivo'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="preview-footer">
        <div className="footer-nav">
          <span>Ayuda</span>
          <span>Volver Atras</span>
        </div>
        <div className="footer-info">
          <p>© 2026 Farmacia Angelica — Sistema de Gestión de Compras e Inventario</p>
          <p>Versión 1.0 | Soporte técnico: losvikingosnoruegos@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ProvidersPreview;