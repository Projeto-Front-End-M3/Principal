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
      <img src={product.img} alt={product.name} />
      <p className='card_shop'> {product.name} </p>
      <p className='card_shop'> Categoria: {product.category}</p>
      <p className='price_shop'> Valor R$ {product.price},00</p>
      <button onClick={() => addProductsCart(product)}>Adicionar</button>
    </StyledProductCard>
  )
}
