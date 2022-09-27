import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from '../Form/Form'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Cart = () => {

  const [idCompra, setIdCompra] = useState('')
  const {cart, clearCart, removeItem, getTotalPrice, getTotalCantidades} = (useContext(CartContext))
  const totalPrice = getTotalPrice()
  const totalCantidades = getTotalCantidades()

  const handleId = (id)=>{
    setIdCompra(id)
  }

  if(idCompra){
    return <h1 className = 'mt-3 text-center'>Gracias por su compra ! su numero de recibo es el: {idCompra}</h1>
  }

  if(cart.length === 0 ){
    return <h1 className = 'mt-3 text-center'>Aun no compraste nada, volve al <Link to='/'>home</Link> y agrega algo al carrito</h1>
  }

  return (
    <div>
      {
        cart?.map((item)=>(
          
          <Card className='m-3 d-flex flex-row bg-light border-dark' key={item.id}>
            <Card.Img variant="top" style={{width: '120px'}} className='boder rounded m-2' src={item.img} />
            <Card.Body className='d-flex align-items-center justify-content-between'>
              <div>
                <Card.Title>
                  {item.title}
                </Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text className='align-self-end'>
                  Cantidad: {item.cant}
                </Card.Text>
              </div>
              <Button variant="outline-danger" onClick={()=>removeItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
              </Button>
            </Card.Body>
          </Card>
          
        ))
      }
      <div className="d-flex justify-content-end">
        <span className='me-3'>Total: ${totalPrice}.-</span>
      </div>
      <div className="btn btn-danger d-block m-3" onClick={clearCart}>Eliminar todos</div>
      <Form cart={cart} total={totalPrice} clearCart={clearCart} handleId={handleId}/>
    </div>
  )
}

export default Cart