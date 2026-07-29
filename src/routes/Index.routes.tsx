import { Routes, Route } from "react-router-dom";
import MainMenu from "../pages/MainMenu";
import SupplierManagment from "../pages/SupplierManagment";
import SupplyRequestsManagment from "../pages/SupplyRequestsManagement";
import SupplyCategoryManagment from "../pages/SupplyCategoryManagment";

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />}/>
      <Route path="/suppliers" element={<SupplierManagment />}/>
      <Route path="/supply-requests" element={<SupplyRequestsManagment />}/>
      <Route path="/supply-categories" element={<SupplyCategoryManagment />}/>
    </Routes>
  );
}

export default RouterPage;