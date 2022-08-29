import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import ItemDetail from '../ItemDetail/ItemDetail'
// import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading ] = useState(true)

    useEffect(()=>{
        const getProducts = new Promise((res, rej)=>{
            setTimeout(()=>{
              res(products)
            }, 2000);
          });
          getProducts
            .then((data)=>{
              setIsLoading(false)
              setItem(data.find((item)=>item.id === 3));
            })
            .catch((error)=>{
              console.log(error);
            })
    },[])



  return (
    <>
        {
            isLoading ? 'Cargando...' : <ItemDetail item={item}/>
        }
    </>
  )
}

export default ItemDetailContainer