import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Help from "../pages/helpPage"
import MainMenu from "../pages/MainMenu";
import SupplierManagment from "../pages/SupplierManagment";
import SupplyRequestsManagment from "../pages/SupplyRequestsManagement";
import SupplyCategoryManagment from "../pages/SupplyCategoryManagment";
import Test from "../pages/Test";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/menu" element={<MainMenu />}/>
      <Route path="/suppliers" element={<SupplierManagment />}/>
      <Route path="/supply-requests" element={<SupplyRequestsManagment />}/>
      <Route path="/supply-categories" element={<SupplyCategoryManagment />}/>
      <Route path="/test" element={<Test />}/>
    </Routes>
  );
}

export default RouterPage;