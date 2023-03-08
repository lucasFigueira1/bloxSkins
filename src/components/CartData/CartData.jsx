import './index.css'
import { CartDataButtons } from '../CartDataButtons/CartDataButtons'
import { ItemsCartInfo } from '../ItemsCartInfo/ItemsCartInfo'

export function CartData () {
  return (
    <div className='cart-data-container'>
      <ItemsCartInfo />
      <CartDataButtons />
    </div>
  )
}
