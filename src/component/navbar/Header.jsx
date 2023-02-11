// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from '../../assets/images/logo.png'
import './navbar.css'
import Cart from '../cart/Cart';
import { useState } from 'react';

function Header() {

  const [openModal,setOpenModal] = useState(false)

  return (

    <div className="header">
      <Nav.Link 
        onClick={()=> setOpenModal(true)}
        className='nav_link'
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </Nav.Link>
      {
        openModal && 
        <Cart 
          openModal={openModal} 
          setOpenModal={setOpenModal}
        />
      }
      </div>
  )
}

export default Header
