import { StyledShopPage } from './styled'
import { Link, Outlet } from 'react-router-dom'
import ReactPlayer from 'react-player';

export const ShopPage = () => {
  
  return (
    <StyledShopPage>
      <header>
        <Link to="/shop"> Home </Link>
        <Link to="/shop/dados"> Dados </Link>
        <Link to="/shop/produtos"> Produtos </Link>
        <Link to="/shop/carrinho"> Carrinho </Link>
      </header>
      {/* <ReactPlayer className='player' url='https://vimeo.com/342535019' controls={true} playing={false}/> */}
      <Outlet />
    </StyledShopPage>
  )
}
