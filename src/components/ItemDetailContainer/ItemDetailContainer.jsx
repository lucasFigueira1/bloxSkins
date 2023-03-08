import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs, where, documentId } from 'firebase/firestore'
import { Loader } from '../Loader/Loader'

function ItemDetailContainer () {
  const [weapon, setWeapon] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const getSkins = async () => {
      const q = query(collection(db, 'skins'), where(documentId(), '==', id))
      const docs = []
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      })
      setWeapon(docs)
    }
    getSkins()
    setIsLoading(false)
  }, [id])
 
  return (
    <div className='item-detail-container h-full'>
      <div className='min-h-screen mx-4 md:mx-0'>
        {
          isLoading
            ? <Loader />
            : weapon.map((data) => {
              return <ItemDetail data={data} key={data.id} />
            })
        }
      </div>
    </div>
  )
}

export default ItemDetailContainer
