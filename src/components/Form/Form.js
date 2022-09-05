import React from 'react'
import { useState } from 'react'

const Form = () => {

    // 1
    // por cada input un estado
    // 2
    // por cada inmput el value 
    // 3- 
    // por cada input el evento onChange


    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    
    const handleChangeName = (event)=>{
        setNombre(event.target.value)
    }

    const handleChangeLastName = (event)=>{
        setApellido(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target.elements.nombre.value)
        // el .dir me da el detalle de todo lo que compone al target
        console.dir(event.target)
    }


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='nombre' name='nombre' value={nombre} onChange={handleChangeName}/>
            <input type="text" placeholder='apellido' name='apellido' value={apellido} onChange={handleChangeLastName}/>
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form