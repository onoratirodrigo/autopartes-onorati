import React, { useEffect, useState } from 'react'
import {products} from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import {Container, Col, Row} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MiSpinner from '../MiSpinner/MiSpinner'
 
const ItemListContainer = ({something}) => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
      setIsLoading(true)

      const getProducts = new Promise((res, rej)=>{
        setTimeout(()=>{
          const filterProducts = products.filter((prod)=> prod.category === id)
          res(id ? filterProducts : products)
        }, 500);
      });
      getProducts
        .then((data)=>{
          setIsLoading(false)
          setItems(data);
        })
        .catch((error)=>{
          console.log(error);
        })
        .finally(()=>{
          console.log('Finally')
        })


  },[id])

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