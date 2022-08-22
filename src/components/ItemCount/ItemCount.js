import React from 'react'
import estilos from './itemCount.module.css'

const ItemCount = ({stock, initial, onAdd, add}) => {

    const sumar = ()=>{
        if(add < stock){
            onAdd(add + 1)
        }else{
            console.log('no se puede mas que el stock')
        }
    }

    const restar =(e)=>{
        let btn = e.target
        if(add > 0){
            onAdd(add - 1)
        }
    }

    const agregarAlCarrito = (add)=>{
        let msj
        (add === 1) ? msj = `Se agrego 1 producto al carrito` : msj = `Se agregaron ${add} productos al carrito`
        alert(msj)
    }

  return (
    <div className={estilos.card}>
        <h1>Amortiguadores delanteros</h1>
        <div>
            <button onClick={restar}>-</button>
            <span className={estilos.cant}>{add}</span>
            <button onClick={sumar}>+</button>
        </div>
        <p>Stock: {stock}</p>
        <button 
            style={{width:'100%'}} 
            onClick={()=>{agregarAlCarrito(add)}}>
            Agregar al carrito
        </button>
    </div>
  )
}

export default ItemCount