import { useContext } from 'react'
import { ShopContext } from '../../providers/shopProvider'
import { CartProductCard } from './cart-product-card'



export const Cart = () => {
  const { cartProducts, deleteCart, totalCart } = useContext(ShopContext)

  return (
    <main className='cart_shop'>
      <ul className='ul_cart'>
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
      <button className='button_shop' onClick={() => deleteCart()}>Remover Todos</button>
    </main>
  )
}
