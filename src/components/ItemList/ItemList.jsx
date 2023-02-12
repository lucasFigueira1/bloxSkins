import React, { useState, useEffect } from 'react'
import data from '../../mock/FaceApi.json'
import Item from '../Item/Item'
import './index.css'

function ItemList () {
  const [weapons, setWeapons] = useState([])

  useEffect(() => {
    setWeapons(data)
  }, [])

  return (
    <div className='items-card-wrapper mx-auto mt-8'>
      {
        weapons.map((w) => {
          return (
            <Item key={w.id} weapon={w} />
          )
        })
      }
    </div>
  )
}

export default ItemList
