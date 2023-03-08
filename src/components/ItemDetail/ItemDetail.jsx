import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './index.css'

function ItemDetail ({ data }) {
  return (
    <div className='item-details-wrapper container mx-auto text-white p-4 gap-20'>
      <div className='item-img flex'>
        <img src={data.skin_img} alt={data.category} />
      </div>
      <div className='flex flex-col gap-8 2xl:gap-16'>
        <div className='item-detail-data flex flex-col gap-1 text-lg'>
          <h2 className='font-semibold text-lg'>{data.category}</h2>
          <h2 className='font-semibold text-xl'>{data.skin_name}</h2>
          <span className='font-semibold text-base'>${data.price}</span>
        </div>
        <div>
          <ItemCount data={data} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
