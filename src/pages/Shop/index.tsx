import { StyledShopPage } from './styled'
import { Link, Outlet } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Header } from '../../components/header';

export const ShopPage = () => {
  
  return (
    <StyledShopPage>
      <Header/>
      <div className='header_container'>
        <Link className='link_page' to="/shop"> Home </Link>
        <Link className='link_page' to="/shop/dados"> Dados </Link>
        <Link className='link_page' to="/shop/produtos"> Produtos </Link>
        <Link className='link_page' to="/shop/carrinho"> Carrinho </Link>
      </div>
        {/* <ReactPlayer className='player' url='https://vimeo.com/342535019' controls={true} playing={false}/> */}
      <Outlet />
    </StyledShopPage>
  )
}
