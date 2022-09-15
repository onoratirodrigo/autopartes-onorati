import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../mock/products'
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
        console.log(res)
        setItem({
          id: res.id,
          ...res.data()
        })
      }).finally(()=>{
        setIsLoading(false)
      })

        // const getProducts = new Promise((res, rej)=>{
        //     setTimeout(()=>{
        //       const numId = (id)
        //       res(products.find((item)=>item.id === numId))
        //     }, 500);
        //   });
        //   getProducts
        //     .then((data)=>{
        //       setIsLoading(false)
        //       setItem(data)
        //     })
        //     .catch((error)=>{
        //       console.log(error);
        //     })
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