import { useCart } from '../../hooks/useCart'
import './index.css'

export function ItemsCartInfo () {
  const { cartItemsQuantity, cartTotalPrice } = useCart()

  return (
    <>
      <span className='font-bold'>Total</span>
      <div className='total-items-wrapper'>
        <span>Total items:</span>
        <span>{cartItemsQuantity()}</span>
      </div>
      <div className='total-price-wrapper'>
        <span>Total price:</span>
        <span>${cartTotalPrice()}</span>
      </div>
    </>
  )
}
