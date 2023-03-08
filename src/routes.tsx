import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { DashboardPage } from './pages/Dashboard'
import { ShopPage } from './pages/Shop'
import { RenderProductsUser} from './components/shop-components/produtos'
import { Address} from './components/shop-components/dados'
import { Cart} from './components/shop-components/carrinho'

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/shop" element={<ShopPage />}>
      <Route path="produtos" element={<RenderProductsUser/>} />
      <Route path="dados" element={<Address/>} />
      <Route path="carrinho" element={<Cart/>} />
    </Route>
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
)

export default Router
