import React from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export function CartWidget () {
  return (
    <Link to='./cart'>
      <RiShoppingBagLine className='text-white w-6 h-6 font-light cursor-pointer hover:text-bloxPink' />
    </Link>
  )
}
