import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import './index.css'
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { Loader } from '../Loader/Loader'

function ItemList () {
  const [weapons, setWeapons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    const q = query(collection(db, 'skins'))

    const getSkins = async () => {
      const querySnapshot = await getDocs(q)
      const docs = []
      querySnapshot.forEach((doc) => {
        // Getting skins from db
        docs.push({ ...doc.data(), id: doc.id })
      })

      // Filter by category
      if (category) {
        setWeapons(docs.filter(skins => skins.category === category))
      } else {
        setWeapons(docs)
      }

      setIsLoading(false)
    }

    getSkins()
  }, [category])

  return (
    <div className={isLoading ? 'is-loading-container' : 'items-card-wrapper mx-auto mt-8'}>
      {
        isLoading
          ? <Loader />
          : weapons.map((skins) => {
            return (
              <Item key={skins.id} dataSkins={skins} />
            )
          })
      }

    </div>
  )
}

export default ItemList
