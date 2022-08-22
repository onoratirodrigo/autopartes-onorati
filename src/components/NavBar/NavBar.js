import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import estilos from './navbar.module.css'

const NavBar = ({test, beta}) => {
  return (
    <div className={estilos.navbar}>
        <img src="https://seeklogo.com/images/E/etman-logo-5D4BA71902-seeklogo.com.png" alt="" />
        <div>
          <a className={estilos.active} href='https://google.com'>Home</a>
          <a href='https://google.com'>Products</a>
          <a href='https://google.com'>About Us</a>
        </div>
        <CartWidget/>
    </div>
    
  )
}

export default NavBar