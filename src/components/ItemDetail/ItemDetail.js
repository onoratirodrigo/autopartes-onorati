import React, { useState, useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {

  const [cant, setCant] = useState(0)
  const {cart, addToCart} = useContext(CartContext)

  const onAdd = (cant) =>{
    setCant(cant)
    addToCart(item, cant)
  }
    
  return (
    <div className='shadow d-flex'>
        <img src={item.img} alt="img" className='w-50' />
        <div className='ms-3'>
            <h1>{item.title}</h1>
            <p>Descripcion: {item.description}</p>
            <p>Precio: ${item.price}</p>
            {
              cant === 0
              ? <ItemCount stock={item.stock} onAdd={onAdd}/>
              : <Button as={Link} to='/cart' className='btn-dark'>Ir a carrito</Button>
            }
            
        </div>
    </div>
  )
}

export default ItemDetail