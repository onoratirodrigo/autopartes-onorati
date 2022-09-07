import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import MiSpinner from '../MiSpinner/MiSpinner'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading ] = useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const getProducts = new Promise((res, rej)=>{
            setTimeout(()=>{
              const numId = Number(id)
              res(products.find((item)=>item.id === numId))
            }, 500);
          });
          getProducts
            .then((data)=>{
              setIsLoading(false)
              setItem(data)
            })
            .catch((error)=>{
              console.log(error);
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