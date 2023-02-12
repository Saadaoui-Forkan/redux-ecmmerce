import React from 'react'
import NavigateButtons from '../navigate-buttons/NavigateButtons'
import Slider from '../slider/Slider'

function Main() {
  return (
    <div className='main'>
      <Slider/>
      <NavigateButtons className='navigate-buttons'/>
    </div>
  )
}

export default Main
