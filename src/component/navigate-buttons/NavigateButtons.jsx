import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterProducts } from '../../features/slices/productSlice';
import './navigateButtons.css'

function NavigateButtons() {

    const buttons = [
        "All",
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
      ];

      const dispatch = useDispatch()

  return (
    <div className='nav-btns'>
        {buttons.map((button, index) => {
            return (
                <div key={index} className="nav-btn-wrapper">
                        <Link to={`/filteredProducts/${button}`}>
                            <button 
                                className="nav-btn"
                                onClick = {()=> dispatch(filterProducts(button))}
                            >
                                {button}
                            </button>
                        </Link>
                </div>
            );
        })}
    </div>
  )
}

export default NavigateButtons
