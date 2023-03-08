import { useCart } from '../../hooks/useCart'
import { ItemsCartInfo } from '../ItemsCartInfo/ItemsCartInfo'
import { GoBackHome } from '../GoBackHome/GoBackHome'
import { CartItemCheckout } from '../CartItemCheckout/CartItemCheckout'
import './index.css'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'

export function Checkout () {
  const { cart } = useCart()

  return (
    <div className='checkout-container container mx-auto'>

      <div className='checkout-items'>
        {
            cart.length > 0
              ? (
                <>
                  {
                    cart.map(weapon => (
                      <CartItemCheckout key={weapon.id} weapon={weapon} />
                    ))
                  }
                  <div className='info-checkout'>
                    <ItemsCartInfo />
                  </div>
                </>
                )
              : <GoBackHome />
        }
      </div>

      <div className='checkout-form'>
        <CheckoutForm />
      </div>

    </div>
  )
}
