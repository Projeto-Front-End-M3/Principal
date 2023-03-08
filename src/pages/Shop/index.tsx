import { StyledShopPage } from './styled'
import { Link, Outlet } from 'react-router-dom'
import { useState, useContext } from 'react'

export const ShopPage = () => {

  

  const [page, setPage] = useState('produtos')
  
  return (
    <StyledShopPage>
      <header>
        <Link to="/shop/produtos"> Produtos </Link>
        <Link to="/shop/dados"> Dados </Link>
        <Link to="/shop/carrinho"> Carrinho </Link>
      </header>
      
      <Outlet />
    </StyledShopPage>
  )
}
