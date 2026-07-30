import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/layouts/Layout';
import Help from '../src/pages/HelpPage';
import PurchaseProductDetailPage from '../src/pages/PurchaseProductDetailPage';
import RegisteredPurchasesListPage from '../src/pages/RegisteredPurchasesListPage';
import RegisteredSuppliersListPage from '../src/pages/RegisteredSuppliersListPage';
import RegisteredRequestsListPage from '../src/pages/RegisteredRequestsListPage';
import RegisteredCategoriesListPage from '../src/pages/RegisteredCategoriesListPage';

function RouterPage() {
    return (
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
    );
}

export default RouterPage;