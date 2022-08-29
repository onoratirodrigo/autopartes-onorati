import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    
  return (
    <div className='shadow d-flex'>
        <img src={item.img} alt="img" className='w-50' />
        <div>
            <h1>{item.title}</h1>
            <p>Descripcion: {item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount stock={item.stock}/>
        </div>
    </div>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={item.img} />
    //   <Card.Body>
    //     <Card.Title>{item.title}</Card.Title>
    //     <Card.Text>
    //       {item.description}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  )
}

export default ItemDetail