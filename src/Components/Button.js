import React from 'react'
import { Button } from '@mui/material'

export default function PrimaryButton({children, bgcolor, color}) {
  return (
    <Button variant="contained" sx={{backgroundColor:`${bgcolor}`, color:`${color}`, my:'2rem', "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: `${bgcolor}`
  }}}>
      {children}
    </Button>
  )
}
