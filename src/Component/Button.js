import React from 'react'
import { Button } from '@mui/material'


export default function PrimaryButton({children, bgcolor, color,isDesktop, margin="5rem 0 0 0"}) {
  // Check to know if its in desktop or mobile phone screen and apply margin based on Screen Sizes
  let screenSize = isDesktop ? `${margin}` : "2rem auto";

  return (
    <Button variant="contained" display='flex' size= 'large' sx={{backgroundColor:`${bgcolor}`, color:`${color}`, display: 'flex', m: `${screenSize}`, "&:hover": {
      //background color on hover can be changed here by passing bgcolor as props via the component
      backgroundColor: `${bgcolor}`
  }}}>
      {children}
    </Button>
  )
}
