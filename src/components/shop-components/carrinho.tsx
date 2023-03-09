import { useContext } from 'react'
import { ShopContext } from '../../providers/shopProvider'
import { CartProductCard } from './cart-product-card'



export const Cart = () => {
  const { cartProducts, deleteCart, totalCart } = useContext(ShopContext)

  return (
    <main>
      <ul>
      {cartProducts.map(cartProduct =>(
        <CartProductCard key={cartProduct.id} cartProduct={cartProduct}/>
      ))}
      </ul>
      <p>
        {' '}
        {totalCart().toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })}{' '}
      </p>
      <button onClick={() => deleteCart()}>Remover Todos</button>
      <h1>Teste carrinhoo</h1>
    </main>
  )
}
