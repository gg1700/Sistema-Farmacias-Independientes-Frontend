import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Help from "../pages/HelpPage";
import PurchaseProductDetailPage from "../pages/PurchaseProductDetailPage";
import RegisteredPurchasesListPage from "../pages/RegisteredPurchasesListPage";
import RegisteredSuppliersListPage from "../pages/RegisteredSuppliersListPage";
import RegisteredRequestsListPage from "../pages/RegisteredRequestsListPage";
import RegisteredCategoriesListPage from "../pages/RegisteredCategoriesListPage";
import MainMenu from "../pages/MainMenu";
import SupplierManagment from "../pages/SupplierManagment";
import SupplyRequestsManagment from "../pages/SupplyRequestsManagement";
import SupplyCategoryManagment from "../pages/SupplyCategoryManagment";
import RegisterSupply from "../pages/RegisterSupply";
import RegisterSupplier from "../pages/RegisterSupplier";
import RegisterSupplyRequest from "../pages/RegisterSupplyRequest";
import RegisterSupplyCategory from "../pages/RegisterSupplyCategory";
import ProvidersReport from '../pages/reports/reportProvider/index.tsx';
import RequestReport from '../pages/reports/reportRequest/index.tsx';
import PurchaseReport from '../pages/reports/reportPurchase/index.tsx';
import ProvidersPreview from '../pages/previews/previewProvider/index.tsx';
import PurchasesPreview from '../pages/previews/previewPurchase/index.tsx';
import RequestsPreview from '../pages/previews/previewRequest/index.tsx';

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="help" element={<Help />}/>
        <Route path="menu" element={<MainMenu />}/>
        <Route path="suppliers" element={<SupplierManagment />}/>
        <Route path="suppliers/register" element={<RegisterSupplier />}/>
        <Route path="supply-requests" element={<SupplyRequestsManagment />}/>
        <Route path="supply-requests/register" element={<RegisterSupplyRequest/>}/>
        <Route path="supply-categories" element={<SupplyCategoryManagment />}/>
        <Route path="supply-categories/register" element={<RegisterSupplyCategory />}/>
        <Route path="supply/register" element={<RegisterSupply />}/>
        <Route path="reports/suppliers" element={<ProvidersReport />} />
        <Route path="reports/requests" element={<RequestReport />} />
        <Route path="reports/purchases" element={<PurchaseReport />} />
        <Route path="preview/suppliers" element={<ProvidersPreview />} />
        <Route path="preview/purchases" element={<PurchasesPreview />} />
        <Route path="preview/requests" element={<RequestsPreview />} />
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