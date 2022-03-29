import React from 'react'
import {Box} from '@mui/material'

export default function Icon({children,margin}) {
  return (
    <Box 
        sx={{
            width:'50px', 
            height:'50px', 
            backgroundColor: '#fff', 
            borderRadius:'50%', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: `${margin}`
        }}>
        
            {children}
    </Box>
  )
}
