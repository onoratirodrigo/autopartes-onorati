import React from 'react'
import estilos from './item.module.css'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className={estilos.card} key={item.id}>
        <img src={item.img} alt="Denim Jeans" className='w-50'/>
        <h4>{item.title}</h4>
        <p className={estilos.price}>${item.price}</p>
        <p>Stock: {item.stock}</p>
        <Link to={`/detail/${item.id}`}>
          <button>Ver detalle</button>
        </Link>
    </div>
  )
}

export default Item