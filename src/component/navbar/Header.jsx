import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import Cart from '../cart/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

  const [openModal,setOpenModal] = useState(false);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const {name,image} = useSelector(state => state.user)

  return (

    <div className="header">
      <Nav.Link 
        onClick={()=> setOpenModal(true)}
        className='nav_link'
      >
        <i className="fa-solid fa-cart-shopping"></i>
        { 
          totalAmount>0 && (<div className="total-amount">{totalAmount}</div>)
        }
      </Nav.Link>
      {
        openModal && 
        <Cart 
          openModal={openModal} 
          setOpenModal={setOpenModal}
        />
      }
      <Link to = '/login' className='logIn'>
        <img src={image} alt='' />
        <h3 className="login-link">{name}</h3>
      </Link>
      </div>
  )
}

export default Header
