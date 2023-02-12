import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../mock/FaceApi.json'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer () {
  const [weapon, setWeapon] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const item = getItemById(id)
    if (id) {
      setWeapon(item)
    } else {
      setWeapon(data)
    }
  }, [id])

  const getItemById = (id) => {
    return data.find(item => item.id === parseInt(id))
  }

  return (
    <div className='item-detail-container'>
      <div className='item'>
        <ItemDetail weapon={weapon} />
      </div>
    </div>
  )
}

export default ItemDetailContainer
