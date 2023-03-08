import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import './index.css'

export function CartDataButtons () {
  const { clearCart } = useCart()
  return (
    <div className='cart-data-buttons'>
      <span className='cart-data-btn' onClick={clearCart}>
        Clean cart
      </span>
      <Link to='/checkout' className='cart-data-btn'>
        Checkout
      </Link>
    </div>
  )
}
