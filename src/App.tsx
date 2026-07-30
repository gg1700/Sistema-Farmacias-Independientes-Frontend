// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Help from './pages/helpPage';
import ProvidersReport from './pages/reports/reportProvider/index.tsx';
import RequestReport from './pages/reports/reportRequest/index.tsx';
import PurchaseReport from './pages/reports/reportPurchase/index.tsx';
import ProvidersPreview from './pages/previews/previewProvider/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="help" element={<Help />} />
          <Route path="reporte/proveedores" element={<ProvidersReport />} />
          <Route path="reporte/solicitudes" element={<RequestReport />} />
          <Route path="reporte/compras" element={<PurchaseReport />} />
          <Route path="preview/proveedores" element={<ProvidersPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;