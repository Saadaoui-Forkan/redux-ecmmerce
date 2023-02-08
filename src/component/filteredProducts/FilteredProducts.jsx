import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import './filteredProducts.css'
import { storeData } from '../../assets/data/dummyData'

function FilteredProducts() {

    let products = useSelector(state => state.products.filteredProducts)

    const {type} = useParams()
    
    let filteredProducts;
    type === "All" ? filteredProducts = storeData : filteredProducts = products

  return (
    <div className='filtered-products'>
      <div className="filtered-products-title">
        {
            type !== "All" && (<h2>{type}</h2>)
        }
      </div>
      <div className="filtered-products-wrapper">
        {
            filteredProducts.map((prod,index) => (
                <div className="product-card" key={index}>
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
