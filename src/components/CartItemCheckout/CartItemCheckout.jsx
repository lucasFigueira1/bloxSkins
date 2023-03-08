import './index.css'

export function CartItemCheckout ({ weapon }) {
  return (
    <li className='cart-item-data'>
      <img src={weapon.skin_img} alt={weapon.skin_name} />
      <aside>
        <div className='skin-data-wrapper'>
          <strong>{weapon.skin_name}</strong> - ${weapon.price}
          <div className='item-qty'>x {weapon.quantity}</div>
        </div>
      </aside>
    </li>
  )
}
