import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function ItemCount () {
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (act) => {
    if (act === 'sum' && quantity >= 1) {
      setQuantity(quantity + 1)
    } else if (act === 'res' && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className='text-center flex flex-col gap-2'>
      <div className='quantity-wrapper flex justify-center gap-4'>
        <span className='quantity-btn' onClick={() => handleQuantity('res')}>-</span>
        <span>{quantity}</span>
        <span className='quantity-btn' onClick={() => handleQuantity('sum')}>+</span>
      </div>
      <div className='item-count-container flex flex-col gap-2'>
        <span className='item-count-btn'>
          Add to cart
        </span>
        <Link to='../'>
          <span className='item-count-btn'>
            Go back shop
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ItemCount
