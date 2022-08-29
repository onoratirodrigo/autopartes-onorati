import React, { useEffect, useState } from 'react'
import {products} from '../../mock/products'
import ItemList from '../ItemList/ItemList'
import {Container, Col, Row} from 'react-bootstrap'
 
const ItemListContainer = ({something}) => {

  const [items, setItems] = useState([])

  useEffect(()=>{
      const getProducts = new Promise((res, rej)=>{
        setTimeout(()=>{
          res(products)
        }, 2000);
      });
      getProducts
        .then((data)=>{
          setItems(data);
        })
        .catch((error)=>{
          console.log(error);
        })
        .finally(()=>{
          console.log('Finally')
        })


  },[])

  return (
    <div>
      <h2>{something}</h2>
      <Container>
        <ItemList items={items} />
      </Container>
      {/* {
        items.map(item=>{
          return (
            <div key={item.id}>
              <p>{items.title}</p>
              <p>${items.price}.</p>
            </div>
          )
        })
      } */}
    </div>
  )
}

export default ItemListContainer