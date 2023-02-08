import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'
import './navbar.css'

function Header() {
  return (
    <Navbar  expand="md">
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
            <Nav.Link className='nav_link'>
              <i className="fa-solid fa-cart-shopping"></i>
              Shopping Bag
            </Nav.Link>
            
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
