import { useContext } from 'react';
import { ShopContext } from '../../providers/shopProvider';
import { ProductCard } from './product-card';


export const RenderProductsUser = () => {

const {products} = useContext(ShopContext)

return (
    <ul className='products_shop'>
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </ul>
  )
}
