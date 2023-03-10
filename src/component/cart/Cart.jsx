import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/slices/cartSlice';
import './Cart.css'

function Cart({openModal,setOpenModal}) {
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart.cart)
  const totalPrice = useSelector(state=> state.cart.totalPrice)

  // remove from cart
  const handleRemove = (product) => {
    dispatch(removeFromCart(product))
  }
  return (
    <div
      className="modal show cart"
      style={{ display: 'block' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        {
          cart.length > 0 ?
          (
            <Modal.Body>
              {
                cart.map((item,index)=>(
                  <div key={index}>
                    <div className="product-card">
                      <div className="product-card-img">
                        <img src={item.img} alt={item.img} />
                        <h4 className="product-card-info-name">{item.name}</h4>
                      </div>
                      <div className="product-card-info">
                        {
                          item.color && (
                            <div className="product-card-info-color">
                              <div>selected color:</div>
                              <div className='selected-color' style={{backgroundColor:`${item.color}`}}></div>
                            </div>
                          )
                        }
                        {
                          item.size && (
                            <div className="product-card-info-color">
                              selected size: {item.size}
                            </div>
                          )
                        }
                        
                        <h4 className="product-card-info-amount">Amount: {item.amount}</h4>
                        <h4 className="product-card-info-price">Single Item Price: {item.price}</h4>
                        <h4 className="product-card-info-price">Total Item Price: {item.totalPrice}</h4>
                        <div className="remove-product">
                          <button
                            onClick={()=>handleRemove(item)}
                          >
                          Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Modal.Body>
          ) : (
            <Modal.Body>
              <h3 className='empty-bag'>Your bag is empty</h3>
            </Modal.Body>
          )
        }
        <Modal.Footer>
          {
            totalPrice && (
              <p className='total-price'>Total Price Of All Products: {totalPrice}$</p>
            )
          }
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
