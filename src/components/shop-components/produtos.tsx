import { useContext } from 'react';
import { ShopContext } from '../../providers/shopProvider';
import { ProductCard } from './product-card';


export const RenderProductsUser = () => {

const {products} = useContext(ShopContext)

return (
    <ul>
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
      <h1>Teste Produtos</h1>
    </ul>
  )
}
