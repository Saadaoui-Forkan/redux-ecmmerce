import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import './Cart.css'

function Cart({openModal,setOpenModal}) {
  const cart = useSelector(state=> state.cart.cart)
  const totalPrice = useSelector(state=> state.cart.totalPrice)
  const amount = useSelector(state=> state.cart.amount)
  console.log('cart',cart)
  console.log('totalPrice',totalPrice)
  console.log('amount',amount)
  return (
    <div
      className="modal show cart"
      style={{ display: 'block' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        </Modal.Body>

        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={()=>setOpenModal(false)}
          >Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default Cart
