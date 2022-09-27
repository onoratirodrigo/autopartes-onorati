import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import MiSpinner from '../MiSpinner/MiSpinner'
import {db} from '../../Firebase/firebaseConfig'
import {getDoc, doc, collection} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading ] = useState(true)
    const {id} = useParams()

    useEffect(()=>{

      const itemCollection = collection(db, 'productos')
      const ref = doc(itemCollection, id)
      getDoc(ref)
      .then((res)=>{
        setItem({
          id: res.id,
          ...res.data()
        })
      }).finally(()=>{
        setIsLoading(false)
      })
    },[])



  return (
    <div className='d-flex justify-content-center my-3'>
        {
            isLoading ? <MiSpinner/> : <ItemDetail item={item}/>
        }
    </div>
  )
}

export default ItemDetailContainer