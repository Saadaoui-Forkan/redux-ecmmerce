import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './singleProduct.css'
import { addToCart } from '../../features/slices/cartSlice'

function SingleProduct() {

  const {id} = useParams()
  // console.log("id",id)

  const item = useSelector(state => state.products.singleProduct)
  // console.log(item[0])

  const [size,setSize] = useState("")
  const [color,setColor] = useState("")

  const dispatch = useDispatch()

  // add to cart
  const handleAddToCart= (prod) => {
    dispatch(addToCart({
      id: prod.id,
      name: prod.name,
      size: size,
      color: color,
      price: prod.price,
      amount: 1,
      totalPrice: prod.price
    }))
  }

  return (
    <div className='single-product-container'>
      {
        item.filter(prod => prod.id ===id).map((item, index) => {
          return (
            <div key={index} className="single-product-wrapper">
              <div className='single-product-img-wrapper'>
                <img
                  className="single-product-img"
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="single-product-info">
                  <h5 className="single-product-name">
                    {item.name}
                  </h5>
                  <p className="single-product-discount">
                    15% OFF
                  </p>
                  <p className="single-product-text">
                    {item.text}
                  </p>
                  {
                    item.size &&
                    (
                      <div className="single-product-size">
                        <label htmlFor="size">Pick a size</label>
                        <select 
                          className="select-size" 
                          id="size"
                          value={size} 
                          onChange={(e)=> setSize(e.target.value)}
                        >
                          <option value=''>---</option>
                          {item.size.map((size,id) => (
                            <option key={id} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                  }
                  <div className="single-product-colors">
                    <label htmlFor="color">Pick a color</label>
                        <select 
                          className="select-color" 
                          id="color"
                          value={color} 
                          onChange={(e)=> setColor(e.target.value)}
                        >
                          <option value=''>---</option>
                          {item.color.map((color,id) => (
                            <option key={id} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                </div>
                <div className="add-to-cart">
                  <button 
                    className="add-to-cart-btn"
                    type='button'
                    onClick={()=>handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
                </div>
              
            </div>
          );
      })}
    </div>
  )
}

export default SingleProduct
