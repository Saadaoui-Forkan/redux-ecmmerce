import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import Cart from '../cart/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {

  const [openModal,setOpenModal] = useState(false)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  console.log(totalAmount);

  return (

    <div className="header">
      <Nav.Link 
        onClick={()=> setOpenModal(true)}
        className='nav_link'
      >
        <i className="fa-solid fa-cart-shopping"></i>
        { 
          totalAmount && (<div className="total-amount">{totalAmount}</div>)
        }
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
