import React from 'react'
import { Typography } from '@mui/material'
import { useMediaQuery, useTheme } from "@mui/material";

export function PrimaryHeader({children, pbSize}) {
// MaterialUI Hook for Breakpoints
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.up("lg"));
let customFontsize = isMobile ? "2.125rem" : "1.9rem";

  return (
    <Typography variant="h4" component="h2" sx={{ textAlign: 'center', paddingBottom: pbSize, fontWeight: '800', fontSize: customFontsize}} >
        {children}
    </Typography>
  )
}

export function Header({children, textSize, textAlign, pady='1rem 0rem 1rem 0rem'}) {
    return (
      <Typography variant={textSize} component={textSize} sx={{p: `${pady}`, textAlign: {textAlign}}} >
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