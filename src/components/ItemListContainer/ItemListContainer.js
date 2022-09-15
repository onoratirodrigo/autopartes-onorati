import React, { useEffect, useState } from 'react'
// import {products} from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import {Container, Col, Row} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MiSpinner from '../MiSpinner/MiSpinner'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../Firebase/firebaseConfig'
 
const ItemListContainer = ({something}) => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  const {id} = useParams()


  useEffect(()=>{
      setIsLoading(true)


      const itemCollection = collection(db, 'productos')
      const q = (id === undefined) ? itemCollection : query(itemCollection, where('category', '==', id))

      getDocs(q)
      .then((productos)=>{
        const products = productos.docs.map((product)=>{
          return {
            id: product.id,
            ...product.data(),
          }
        })
        setItems(products)
      })
      .catch((error)=>{
        console.log(error)
      }).finally(()=>{
        setIsLoading(false)
      })

      // const getProducts = new Promise((res, rej)=>{
      //   setTimeout(()=>{
      //     const filterProducts = products.filter((prod)=> prod.category === id)
      //     res(id ? filterProducts : products)
      //   }, 500);
      // });
      // getProducts
      //   .then((data)=>{
      //     setIsLoading(false)
      //     setItems(data);
      //   })
      //   .catch((error)=>{
      //     console.log(error);
      //   })
      //   .finally(()=>{
      //     console.log('Finally')
      //   })


  },[id])//id

  return (
    <div className='d-flex justify-content-center my-3'>

      {
        isLoading ? <MiSpinner/> : (
          <Container>
            <h2 className='text-center'>{something}</h2>
            <ItemList items={items} />
          </Container>
        )
      }
      
    </div>
  )
}

export default ItemListContainer