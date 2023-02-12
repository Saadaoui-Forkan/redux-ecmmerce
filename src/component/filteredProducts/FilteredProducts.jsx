import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import './filteredProducts.css'

function FilteredProducts() {

    let products = useSelector(state => state.products.filteredProducts)

    const {type} = useParams()

  return (
    <div className='filtered-products'>
      <div className="filtered-products-title">
        <h2>{type}</h2>
      </div>
      <div className="filtered-products-wrapper">
        {
            products.map((prod,index) => (
                <div className="single-product-card" key={index}>
                    <ProductCard
                        id     = {prod.id}
                        img    = {prod.img}
                        name   = {prod.name}
                        text   = {prod.text}
                        color  = {prod.color}
                        gender = {prod.gender}
                        price  = {prod.price}
                        type   = {type}
                    />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default FilteredProducts
