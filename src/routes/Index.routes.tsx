import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Help from "../pages/HelpPage";
import PurchaseProductDetailPage from "../pages/PurchaseProductDetailPage";
import RegisteredPurchasesListPage from "../pages/RegisteredPurchasesListPage";
import RegisteredSuppliersListPage from "../pages/RegisteredSuppliersListPage";
import RegisteredRequestsListPage from "../pages/RegisteredRequestsListPage";
import RegisteredCategoriesListPage from "../pages/RegisteredCategoriesListPage";
import PurchasesPreviewPage from "../pages/PurchasesPreviewPage";
import SuppliersPreviewPage from "../pages/SuppliersPreviewPage";
import RequestsPreviewPage from "../pages/RequestsPreviewPage";
import PurchasesReportPage from "../pages/PurchasesReportPage";
import SuppliersReportPage from "../pages/SuppliersReportPage";
import RequestsReportPage from "../pages/RequestsReportPage";
import MainMenu from "../pages/MainMenu";
import SupplierManagment from "../pages/SupplierManagment";
import SupplyRequestsManagment from "../pages/SupplyRequestsManagement";
import SupplyCategoryManagment from "../pages/SupplyCategoryManagment";
import RegisterSupply from "../pages/RegisterSupply";
import RegisterSupplier from "../pages/RegisterSupplier";
import RegisterSupplyRequest from "../pages/RegisterSupplyRequest";
import RegisterSupplyCategory from "../pages/RegisterSupplyCategory";
import Test from "../pages/tests/Test.tsx";
import ProductConfirmationExample from "../pages/tests/ProductConfirmationExample.tsx";
import UpdateProviderExample from "../pages/tests/UpdateProviderExample.tsx";
import ApprovalModalExample from "../pages/tests/ApprovalExample.tsx";
import ProductDetailModalExample from "../pages/tests/ProducDetailExample.tsx";
import CategoryModalExample from "../pages/tests/CategoryExample.tsx";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainMenu />} />
        <Route path="help" element={<Help />} />
        <Route path="purchases/register/:purchaseId?" element={<PurchaseProductDetailPage />} />
        <Route path="purchases/list" element={<RegisteredPurchasesListPage />} />
        <Route path="inventory/categories" element={<RegisteredCategoriesListPage />} />
        <Route path="inventory/requests" element={<RegisteredRequestsListPage />} />
        <Route path="suppliers/manage" element={<RegisteredSuppliersListPage />} />
        <Route path="reports/purchases" element={<PurchasesPreviewPage />} />
        <Route path="reports/suppliers" element={<SuppliersPreviewPage />} />
        <Route path="reports/requests" element={<RequestsPreviewPage />} />
        <Route path="reports/purchases/detail" element={<PurchasesReportPage />} />
        <Route path="reports/suppliers/detail" element={<SuppliersReportPage />} />
        <Route path="reports/requests/detail" element={<RequestsReportPage />} />

        <Route path="menu" element={<MainMenu />} />
        <Route path="suppliers" element={<SupplierManagment />} />
        <Route path="suppliers/register" element={<RegisterSupplier />} />
        <Route path="supply-requests" element={<SupplyRequestsManagment />} />
        <Route path="supply-requests/register" element={<RegisterSupplyRequest />} />
        <Route path="supply-categories" element={<SupplyCategoryManagment />} />
        <Route path="supply-categories/register" element={<RegisterSupplyCategory />} />
        <Route path="supply/register" element={<RegisterSupply />} />

        <Route path="/test" element={<Test />} />
        <Route path="/modal-product-conf-test" element={<ProductConfirmationExample />} />
        <Route path="/modal-provider-test" element={<UpdateProviderExample />} />
        <Route path="/modal-approval-test" element={<ApprovalModalExample />} />
        <Route path="/modal-product-detail-test" element={<ProductDetailModalExample />} />
        <Route path="/modal-category-test" element={<CategoryModalExample />} />
      </Route>
    </Routes>
  );
}

export default RouterPage;