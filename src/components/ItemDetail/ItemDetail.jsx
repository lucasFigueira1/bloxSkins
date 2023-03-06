import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './index.css'

function ItemDetail ({ weapon }) {
  return (
    <div className='item-details-wrapper container mx-auto text-white p-4 gap-20'>
      <div className='item-img flex'>
        <img src={weapon.skin_img} alt={weapon.category} />
      </div>
      <div className='flex flex-col gap-8 2xl:gap-16'>
        <div className='item-detail-data flex flex-col gap-1 text-lg'>
          <h2 className='font-semibold text-lg'>{weapon.category}</h2>
          <h2 className='font-semibold text-xl'>{weapon.skin_name}</h2>
          <span className='font-semibold text-base'>${weapon.price}</span>
        </div>
        <div>
          <ItemCount weapon={weapon} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
