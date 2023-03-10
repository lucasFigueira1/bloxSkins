import './index.css'
import { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { SuccessfulPurchase } from '../SuccessfulPurchase/SuccessfulPurchase'
import { useCart } from '../../hooks/useCart'

export function CheckoutForm () {
  const [orderID, setOrderID] = useState('')
  const { cartTotalPrice, cart, clearCart } = useCart()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const order = {
    buyerData: {
      name: '',
      lastName: '',
      email: ''
    },
    totalPrice: cartTotalPrice(),
    items: cart
  }

  const [values, setValues] = useState(order)

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, buyerData: { ...values.buyerData, [name]: value } })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    // If cart is empty disable submit
    if (cart.lenght <= 0) {
      setIsSubmitted(true)
    }
    // Prevent multiple submits
    if (!isSubmitted) {
      setIsSubmitted(true)
    }
    // Add a new document with a generated id.
    const { buyerData, totalPrice, items } = values
    const docRef = await addDoc(collection(db, 'orders'), { buyerData, totalPrice, items })

    setOrderID(docRef.id)
    setValues(order)
    clearCart()
  }

  return (

    <form onSubmit={handleOnSubmit}>
      <h2>Let's finish your buy!</h2>

      <div className='names-inputs'>
        <input
          type='text'
          placeholder='Name'
          required
          name='name'
          value={values.buyerData.name}
          onChange={handleOnChange}
        />
        <input
          type='text'
          placeholder='Lastname'
          required
          name='lastName'
          value={values.buyerData.lastName}
          onChange={handleOnChange}
        />
      </div>

      <input
        type='email'
        placeholder='Mail'
        required
        name='email'
        value={values.buyerData.email}
        onChange={handleOnChange}
      />
      <button className='end-buy-btn' disabled={isSubmitted}>
        Submit
      </button>

      {orderID ? <SuccessfulPurchase orderID={orderID} /> : null}
    </form>

  )
}
