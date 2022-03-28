import React from 'react'
import { Button } from '@mui/material'


export default function PrimaryButton({children, bgcolor, color,isDesktop}) {
  // Media Query to be applied on based on Screen Size
  let screenSize = isDesktop ? "5rem 0 0 0" : "2rem auto";
  
  return (
    <Button variant="contained" display='flex' size= 'large' sx={{backgroundColor:`${bgcolor}`, color:`${color}`, display: 'flex', m: `${screenSize}`, "&:hover": {
      //you want this to be the same as the backgroundColor above

      //YES, because no backgroundColor on hover was specified during the mockup design.
      backgroundColor: `${bgcolor}`
  }}}>
      {children}
    </Button>
  )
}
