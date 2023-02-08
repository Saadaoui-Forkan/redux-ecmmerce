import React from 'react'
import './slider.css'
import { useDispatch, useSelector } from 'react-redux'
import { nextSlide,prevSlide,dotSlide } from '../../features/slices/sliderSlice'
import { sliderData } from '../../assets/data/dummyData'

function Slider() {
    const dispatch = useDispatch()
    const slideIndex = useSelector(state => state.slider.value)
  return (
    <div className="slider-container">
        <div className='slider'>
        {
            sliderData.map((slide,index) => {
                return <div className='slide' key={index}>
                    {
                        parseInt(slide.id) === slideIndex 
                        &&
                        <>
                            <div className="slide-img">
                                <img src={slide.img} alt=""/>
                            </div>
                            <div className="slide-text">
                                <p> {slide.text} </p>
                            </div>
                        </>
                        
                    }
                </div>
            })
        }
        <div className="dots">
            {
                sliderData.map((dot,i) =>(
                    <div  
                        key={i}
                        className = {slideIndex === parseInt(dot.id) ? "dot active-dot" : "dot"}
                        onClick = {() => dispatch(dotSlide(parseInt(dot.id)))}
                    ></div>
                ))
            }
        </div>
        <div className="btns">
            <i 
                className="fa-solid fa-circle-arrow-right" 
                onClick={
                    ()=>dispatch(nextSlide(slideIndex+1))
                }
            ></i> 
            <i 
                className="fa-solid fa-circle-arrow-left" 
                onClick={
                    ()=>dispatch(prevSlide(slideIndex-1))
                }
            ></i> 
        </div>

        </div>
    </div>
    
  )
}

export default Slider
