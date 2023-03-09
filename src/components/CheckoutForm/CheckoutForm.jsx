import './index.css'
import { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { SuccessfulPurchase } from '../SuccessfulPurchase/SuccessfulPurchase'
import { useCart } from '../../hooks/useCart'

export function CheckoutForm () {
  const [orderID, setOrderID] = useState('')
  const { cart, cartTotalPrice, clearCart } = useCart()

  const order = {
    buyerData: {
      name: '',
      lastName: '',
      email: ''
    },
    items: cart,
    totalPrice: cartTotalPrice()
  }
  const [values, setValues] = useState(order)

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, buyerData: { ...values.buyerData, [name]: value } })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'orders'), {
      values
    })

    clearCart()
    setOrderID(docRef.id)
    setValues(order)
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
      <button className='end-buy-btn'>
        Submit
      </button>

      {orderID ? <SuccessfulPurchase orderID={orderID} /> : null}
    </form>

  )
}
