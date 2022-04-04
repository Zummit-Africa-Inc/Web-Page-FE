import React from 'react'
import { Typography } from '@mui/material'
import { useMediaQuery, useTheme } from "@mui/material";



export function Typography2({children, pbSize}) {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up("lg"));
    let customFontsize = isMobile ? "2.125rem" : "1.9rem";
  return (
    <Typography variant="h6" component="h4" sx={{ textAlign: 'center', paddingBottom: pbSize, fontWeight: '800', fontSize: customFontsize}} >
        {children}
    </Typography>
  )
}

