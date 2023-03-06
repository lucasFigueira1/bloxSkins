import React from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import './index.css'

export function CartWidget () {
  const { cart } = useCart()

  return (
    <>
      <div className='bag-container'>
        <Link to='./cart'>
          <RiShoppingBagLine className='text-white w-6 h-6 font-light cursor-pointer hover:text-bloxPink' />
        </Link>
        {
          cart.length > 0
            ? (
              <span className='qty-bubble'>{cart.length}</span>
              )
            : null
        }
      </div>
    </>
  )
}
