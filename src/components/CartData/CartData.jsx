import './index.css'
import { useCart } from '../../hooks/useCart'

export function CartData () {
  const { cartItemsQuantity, cartTotalPrice, clearCart } = useCart()

  return (
    <div className='cart-data-container'>
      <span className='font-bold'>Total</span>
      <div className='total-items-wrapper'>
        <span>Total items:</span>
        <span>{cartItemsQuantity()}</span>
      </div>
      <div className='total-price-wrapper'>
        <span>Total price:</span>
        <span>${cartTotalPrice()}</span>
      </div>
      <div className='cart-data-buttons'>
        <span onClick={clearCart}>
          Clean cart
        </span>
        <span>
          Checkout
        </span>
      </div>
    </div>
  )
}
