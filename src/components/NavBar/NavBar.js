import React from 'react'
import estilos from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={estilos.navbar}>
        <div>Etman</div>
        <ul>
            <li href='https://google.com'>Home</li>
            <li href='https://google.com'>Products</li>
            <li href='https://google.com'>About Us</li>
        </ul>
    </div>
    
  )
}

export default NavBar