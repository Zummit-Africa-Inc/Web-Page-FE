import React from 'react'
import SliderComponent from "../Component/SliderComponent"
import {sliderItem} from "./sliderItem"

const Slider = () => {
    console.log(sliderItem)
  return (
      
          <SliderComponent items={ sliderItem }/>
    
  )
}

export default Slider