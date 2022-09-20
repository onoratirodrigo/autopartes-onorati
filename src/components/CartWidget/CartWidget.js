import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className='position-relative'>
      <AiOutlineShoppingCart style={{float:'right'}} size={30} color='#8F1838'/>
      {cart.length !== 0 && <span className='fs-6 border border-danger bg-danger rounded text-white position-absolute top-0 start-100 translate-middle'
                             style={{textDecoration:'none'}}>{cart.length}</span>}
    </div>
  )
}

export default CartWidget