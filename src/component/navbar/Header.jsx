import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'
import './navbar.css'
import Cart from '../cart/Cart';
import { useState } from 'react';

function Header() {

  const [openModal,setOpenModal] = useState(false)

  return (
    <Navbar  expand="md" className='header'>
      <Container fluid >
        <Navbar.Brand >
          <img src={logo} alt="logo" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto  "
            navbarScroll
          >
            <Nav.Link className='nav_link'>
              LogOut
            </Nav.Link>
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
            
          </Nav>
          <Form className="form d-flex col-xs-11 col-sm-9 col-md-6">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button className='form_btn'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
