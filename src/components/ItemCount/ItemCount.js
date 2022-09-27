import React, { useState } from 'react'
import estilos from './itemCount.module.css'
import { Alert } from 'react-bootstrap'

const ItemCount = ({stock, onAdd}) => {

    const [cant, onCant] = useState(1)
    const [maxLimit, setMaxLimit] = useState(false)
    const initial = 1
    const danger = 'danger'

    const sumar = ()=>{
        if(cant < stock){
            onCant(cant + 1)
        }else{
            console.log('no se puede mas que el stock')
            setMaxLimit(true)
        }
    }

    const restar =(e)=>{
        let btn = e.target
        if(cant > 1){
            onCant(cant - 1)
            setMaxLimit(false)
        }
    }

  return (
    <div className={estilos.card}>
        <div>
            <button onClick={restar}>-</button>
            <span className={estilos.cant}>{cant}</span>
            <button onClick={sumar}>+</button>
        </div>
        <p>Stock: {stock}</p>
        {
            maxLimit && (
                <Alert key={danger} variant={danger}>
                    No tenemos mas stock que {stock} unidades !!
                </Alert>
            )
        }
        <button 
            style={{width:'100%'}} 
            onClick={ () => onAdd(cant)}>
            Agregar al carrito
        </button>
    </div>
  )
}

export default ItemCount