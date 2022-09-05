import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={ Link } to='/'>
            <img src="https://seeklogo.com/images/E/etman-logo-5D4BA71902-seeklogo.com.png" alt="" widht='30' height='30'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link as={Link} to='/category/amortiguadores'>Amortiguadores</Nav.Link>
            <Nav.Link as={Link} to='/category/pastillas_de_freno'>Pastillas de freno</Nav.Link>
            <Nav.Link as={Link} to='/category/escapes'>Escapes</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart'>
          <CartWidget/>
        </Link>
      </Container>
    </Navbar>
  )
}

export default NavBar