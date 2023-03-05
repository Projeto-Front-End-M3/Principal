import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { DashboardPage } from "./pages/Dashboard";
import { ShopPage } from "./pages/Shop";

const Router = () => 

  (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/shop' element={<DashboardPage/> } />
      <Route path='/dashboard' element={<ShopPage/> } />
    </Routes>
  );

export default Router;