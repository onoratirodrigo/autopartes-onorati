import React from 'react'
import estilos from './item.module.css'

const Item = ({item}) => {
  return (
    <div className={estilos.card} key={item.id}>
        <img src={item.img} alt="Denim Jeans" className='w-50'/>
        <h1>{item.title}</h1>
        <p className={estilos.price}>${item.price}</p>
        <p>{item.description}</p>
        <p>Stock: {item.stock}</p>
        {/* <p><button>Add to Cart</button></p> */}
    </div>
  )
}

export default Item