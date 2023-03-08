import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(window.localStorage.getItem('cart')) || [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (weapon) => {
    // Busca el index de la skin en el cart
    const skinCartIndex = cart.findIndex(item => item.id === weapon.id)
    // Si la skin ya está en el cart, actualiza su cantidad
    if (skinCartIndex > -1) {
      const newCart = [...cart]
      newCart[skinCartIndex].quantity = weapon.quantity
      setCart(newCart)
      return newCart
    }
    // Si la skin no está en el cart, la agrega
    const newCart = [
      ...cart,
      {
        ...weapon,
        cartItemsQuantity
      }
    ]

    setCart(newCart)
    return newCart
  }

  const removeFromCart = (weapon) => {
    const newCart = cart.filter(item => item.id !== weapon.id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const cartItemsQuantity = () => {
    const newCart = [...cart]
    return newCart.reduce((accum, weapon) => accum + weapon.quantity, 0)
  }

  const cartTotalPrice = () => {
    const newCart = [...cart]
    return newCart.reduce((accum, weapon) => accum + (weapon.price * weapon.quantity), 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsQuantity,
        cartTotalPrice,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
