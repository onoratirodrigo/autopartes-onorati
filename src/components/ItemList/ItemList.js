import React from 'react'
import Item from '../Item/Item'
import {Row, Col } from 'react-bootstrap'

const ItemList = ({items}) => {
  return (
    <Row>
        {items.map((item)=>{
            return(
                <Col lg={4} key={item.id} className='my-3'>
                  <Item item={item}/>
                </Col>
            )
        })}
    </Row>
  )
}

export default ItemList