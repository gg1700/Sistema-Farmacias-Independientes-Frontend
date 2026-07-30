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
import Test from "../pages/Test";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="help" element={<Help />} />
        <Route path="menu" element={<MainMenu />} />
        <Route path="/suppliers" element={<SupplierManagment />} />
        <Route path="/supply-requests" element={<SupplyRequestsManagment />} />
        <Route path="/supply-categories" element={<SupplyCategoryManagment />} />
        <Route path="/test" element={<Test />} />
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