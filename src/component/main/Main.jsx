import React from 'react'
import NavigateButtons from '../navigate-buttons/NavigateButtons'
import Slider from '../slider/Slider'
import Header from '../navbar/Header'

function Main() {
  return (
    <div className='main'>
      <Header/>
      <Slider/>
      <NavigateButtons className='navigate-buttons'/>
    </div>
  )
}

export default Main
