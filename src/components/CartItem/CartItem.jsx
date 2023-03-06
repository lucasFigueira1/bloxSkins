import { useCart } from '../../hooks/useCart'
import './index.css'

export function CartItem ({ weapon }) {
  const { removeFromCart } = useCart()
  return (
    <li className='cart-item-data'>
      <img src={weapon.skin_img} alt={weapon.skin_name} />
      <aside>
        <div className='skin-data-wrapper'>
          <strong>{weapon.skin_name}</strong> - ${weapon.price}
          <div className='item-qty'>x {weapon.quantity}</div>
        </div>

        <footer>
          <span className='delete-item-btn' onClick={() => removeFromCart(weapon)}>Delete item</span>
        </footer>
      </aside>
    </li>
  )
}
