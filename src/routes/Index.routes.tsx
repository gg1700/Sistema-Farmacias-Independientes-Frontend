import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Help from "../pages/HelpPage"
import MainMenu from "../pages/MainMenu";
import SupplierManagment from "../pages/SupplierManagment";
import SupplyRequestsManagment from "../pages/SupplyRequestsManagement";
import SupplyCategoryManagment from "../pages/SupplyCategoryManagment";
import RegisterSupply from "../pages/RegisterSupply";
import RegisterSupplier from "../pages/RegisterSupplier";
import RegisterSupplyRequest from "../pages/RegisterSupplyRequest";
import RegisterSupplyCategory from "../pages/RegisterSupplyCategory";

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
      </Route>
    </Routes>
  );
}

export default RouterPage;