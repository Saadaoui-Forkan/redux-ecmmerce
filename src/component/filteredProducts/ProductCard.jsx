import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { singleProduct } from '../../features/slices/productSlice'

function ProductCard({id,img,name,text,price,color}) {

  const {type} = useParams()

  const dispatch = useDispatch()
  
  return (
    <Link 
      to={`/filteredProducts/${type}/${id}`}
      className = 'product-link' 
    >

      <div 
        className='product-card-container'
        onClick = {() => dispatch(singleProduct(id))} 
      >

        <div className="prod-img">
          <img src={img} alt={id}/>
        </div>
        <div className="prod-name">
          <h4>{name}</h4>
        </div>
        <div className="prod-text">
          <p>{text}</p>
        </div>
        <div className="prod-infos">
          <h3>{price}$</h3>
          <div className="colors">
              {
                  color.map((item,key) => (
                      <div className="prod-card-color" key={key} style={{backgroundColor:`${item}`}}></div>
                  ))
              }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
