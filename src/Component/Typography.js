import React from 'react'
import { Typography } from '@mui/material'


export function PrimaryHeader({children, pbSize}) {

  return (
    <Typography variant="h4" component="h2" sx={{ textAlign: 'center', paddingBottom: pbSize, fontWeight: '800' }} >
        {children}
    </Typography>
  )
}

export function Header({children, textSize}) {
    return (
      <Typography variant={textSize} component={textSize} sx={{py: '1rem'}} >
          {children}
      </Typography>
    )
  }

  export function Paragraph({children, styled}) {
    
    return (
      <Typography component='p' sx={{lineHeight: '1.7rem', textAlign:`${styled}` }}>
          {children}
      </Typography>
    )
  }