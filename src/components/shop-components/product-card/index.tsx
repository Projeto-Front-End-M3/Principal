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
      <div className='container__img'>
        <img src={product.img} alt={product.name}/>
      </div>
      <div className='container__info'>
        <h3>{product.name}</h3>
        <p>R$ {product.price},00</p>
      </div>

      <p className='category__product'>{product.category}</p>

      <button onClick={() => addProductsCart(product)}>Adicionar</button>
    </StyledProductCard>
  )
}
