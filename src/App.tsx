import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Help from './pages/helpPage';
import PurchaseProductDetailPage from './pages/PurchaseProductDetailPage';
import RegisteredPurchasesListPage from './pages/RegisteredPurchasesListPage';
import RegisteredSuppliersListPage from './pages/RegisteredSuppliersListPage';
import RegisteredRequestsListPage from './pages/RegisteredRequestsListPage';
import RegisteredCategoriesListPage from './pages/RegisteredCategoriesListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="ayuda" element={<Help />} />
          <Route path="adquisiciones/registro/:purchaseId?" element={<PurchaseProductDetailPage />} />
          <Route path="adquisiciones/visualizar" element={<RegisteredPurchasesListPage />} />
          <Route path="inventario/categorias" element={<RegisteredCategoriesListPage />} />
          <Route path="inventario/solicitud" element={<RegisteredRequestsListPage />} />
          <Route path="proveedores/gestionar" element={<RegisteredSuppliersListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;