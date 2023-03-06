import React from 'react'
import { useCart } from '../../hooks/useCart'
import { CartData } from '../CartData/CartData'
import { CartItem } from '../CartItem/CartItem'
import { NoItemsCart } from '../NoItemsCart/NoItemsCart'
import './index.css'

function Cart () {
  const { cart } = useCart()

  return (
    <div className='cart-list-wrapper'>
      <div className='cart-item-container container mx-auto'>
        <ul>
          {
            cart.length > 0
              ? (
                <>
                  {
                    cart.map(weapon => (
                      <CartItem key={weapon.id} weapon={weapon} />
                    ))
                  }
                  <CartData />
                </>
                )
              : (<NoItemsCart />)
          }
        </ul>
      </div>
    </div>
  )
}

export default Cart
