import React from 'react'
import {PrimaryHeader, Header} from '../Component/Typography'
import { Box, useMediaQuery, useTheme } from "@mui/material";


export default function Footer() {
    // MaterialUI Hook for Breakpoints
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up("lg"));
    let customFontsize = isMobile ? "2.125rem" : "1.9rem";


  return (
    <Box component='section' 
        sx={{ py: '4rem', backgroundColor: '#F9F8F8', color: '#081F4A'}}
        px={{xs:3, sm:4, md:'9rem'}}
    >
        Footer
    </Box>
  )
}
