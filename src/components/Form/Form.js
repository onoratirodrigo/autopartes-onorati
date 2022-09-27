import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React from 'react'
import {db} from '../../Firebase/firebaseConfig'
import { useState } from 'react'

const Form = ({cart, total, clearCart, handleId}) => {

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')
    
    const handleChangeName = (event)=>{
        setNombre(event.target.value)
    }

    const handleChangeTelNumber = (event)=>{
        setTelefono(event.target.value)
    }

    const handleChangeMail = (event)=>{
        setMail(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        
        const order ={
            buyer: {
                nombre, telefono, mail
            },
            items: cart,
            tota: total,
            date: serverTimestamp()
        }

        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection, order)
        .then((res)=>{
            handleId(res.id)
            clearCart()
            updateprod()
        })

        const updateprod = () =>{
            const orderDoc = doc(db, 'orders', 'Cq1EOV6R6UE7Lz9C9uZT' );
            updateDoc(orderDoc, {total: 50})
        }
    }


  return (
    <div class='d-flex justify-content-center'>
        <form action="" onSubmit={handleSubmit} className='row row-cols-lg-auto g-3 align-items-end'>
            <div className="col-12">

                <label className='form-label'>Nombre</label>
                <input type="text" className='form-control' placeholder='Rodrigo' name='nombre' value={nombre} onChange={handleChangeName}/>
            </div>
            <div className="col-12">
                <label className='form-label'>Telefono</label>
                <input type="text" className='form-control' placeholder='2914585585' name='telefono' value={telefono} onChange={handleChangeTelNumber}/>
            </div>
            <div className="col-12">
                <label className='form-label'>Mail</label>
                <input type="text" className='form-control' placeholder='mailderodrigo@mimail.com' name='mail' value={mail} onChange={handleChangeMail}/>
            </div>
            <div className="col-12">
                <button className='btn btn-primary'>Terminar compra</button>
            </div>
        </form>
    </div>
  )
}

export default Form