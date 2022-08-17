import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'

const NavBar = ({test, beta}) => {
    console.log(test + beta)
  return (
    <div className={estilos.navbar}>
        <span>Etman</span>
        <ul>
            <li href='https://google.com'>Home</li>
            <li href='https://google.com'>Products</li>
            <li href='https://google.com'>About Us</li>
        </ul>
        <CartWidget />
    </div>
    
  )
}

export default NavBar