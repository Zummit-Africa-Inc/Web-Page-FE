import { Box } from '@mui/material'
import React from 'react'
// import SliderComponent from "../Component/SliderComponent"
import {sliderItem} from "./sliderItem"
import { Typography } from '@mui/material'

const Slider = () => {
    console.log(sliderItem)
  return (
    <div>
      <Box
      sx={{ my: 15  }}>
        <Typography  sx={{fontWeight: 800 , color:"#081F4A"}} align="center" variant="h4">
          Leverage AI & ML in these areas and more
        </Typography>
      {/* <SliderComponent items={ sliderItem }/> */}
      </Box>
      
      
    </div>
    
          
    
  )
}

export default Slider