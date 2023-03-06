import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { skins as data } from '../../mock/FaceApi.json'
import Item from '../Item/Item'
import './index.css'

function ItemList () {
  const [weapons, setWeapons] = useState([])
  const { category } = useParams()

  useEffect(() => {
    setWeapons(data)
  }, [])

  useEffect(() => {
    if (category) {
      setWeapons(data.filter(weapon => weapon.category === category))
    } else {
      setWeapons(data)
    }
  }, [category])

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
