import { useContext } from 'react';
import { ShopContext, IProduct } from '../../../providers/shopProvider';
import { StyledProductCard } from "./styled"

interface IProductCardProp {
  cartProduct: IProduct
}

export const CartProductCard = ({cartProduct}: IProductCardProp) => {

const {deleteProductCart} = useContext(ShopContext)

  return (
    <li>
      <img src="" alt="" />
      <p> Nome {cartProduct.name} </p>
      <button onClick={() => deleteProductCart(cartProduct.id)}>Remover</button>
    </li>
  )
}