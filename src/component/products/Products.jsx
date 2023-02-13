import React from 'react'
import { storeData } from '../../assets/data/dummyData'
import ProductCard from '../filteredProducts/ProductCard';
import './products.css'
import '../filteredProducts/filteredProducts.css'

function Products() {
    // get the first product for each type
    const newStoreData = storeData.reduce((acc, current) => {
        const x = acc.find(item => item.type === current.type);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
  return (
    <div className='products'>
      {
        
          newStoreData.map((prod,index) => (
            <div className="single-product-card" key={index}>
              <ProductCard
                id     = {prod.id}
                img    = {prod.img}
                name   = {prod.name}
                text   = {prod.text}
                color  = {prod.color}
                gender = {prod.gender}
                price  = {prod.price}
              />
            </div>
          ))
        
      }
    </div>
  )
}

export default Products
