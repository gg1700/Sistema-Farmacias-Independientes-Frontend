import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Help from "../pages/HelpPage"
import MainMenu from "../pages/MainMenu";
import SupplierManagment from "../pages/SupplierManagment";
import SupplyRequestsManagment from "../pages/SupplyRequestsManagement";
import SupplyCategoryManagment from "../pages/SupplyCategoryManagment";
import ProvidersReport from '../pages/reports/reportProvider/index.tsx';
import RequestReport from '../pages/reports/reportRequest/index.tsx';
import PurchaseReport from '../pages/reports/reportPurchase/index.tsx';
import ProvidersPreview from '../pages/previews/previewProvider/index.tsx';
import PurchasesPreview from '../pages/previews/previewPurchase/index.tsx';
import RequestsPreview from '../pages/previews/previewRequest/index.tsx';
import Test from "../pages/Test";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="help" element={<Help />}/>
        <Route path="menu" element={<MainMenu />}/>
        <Route path="/suppliers" element={<SupplierManagment />}/>
        <Route path="/supply-requests" element={<SupplyRequestsManagment />}/>
        <Route path="/supply-categories" element={<SupplyCategoryManagment />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="reports/suppliers" element={<ProvidersReport />} />
        <Route path="reports/requests" element={<RequestReport />} />
        <Route path="reports/purchases" element={<PurchaseReport />} />
        <Route path="preview/suppliers" element={<ProvidersPreview />} />
        <Route path="preview/purchases" element={<PurchasesPreview />} />
        <Route path="preview/requests" element={<RequestsPreview />} />
      </Route>
    </Routes>
  );
}

export default RouterPage;