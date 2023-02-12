import React from 'react'
import NavigateButtons from '../navigate-buttons/NavigateButtons'
import Products from '../products/Products'
import Slider from '../slider/Slider'

function Main() {
  return (
    <div className='main'>
      <Slider/>
      <NavigateButtons className='navigate-buttons'/>
      <Products/>
    </div>
  )
}

export default Main
