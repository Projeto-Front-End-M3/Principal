import { useContext } from 'react';
import { ShopContext, IProduct } from '../../../providers/shopProvider';
import { StyledProductCard } from "./styled"

interface IProductCardProp {
  product: IProduct
}

export const ProductCard = ({product}: IProductCardProp) => {

const {addProductsCart} = useContext(ShopContext)

  return (
    <StyledProductCard>
      <img src="" alt="" />
      <p> {product.name} </p>
      <p> Categoria {product.category}</p>
      <p>Valor R$ {product.price},00</p>
      <button onClick={() => addProductsCart(product)}>Adicionar</button>
    </StyledProductCard>
  )
}
