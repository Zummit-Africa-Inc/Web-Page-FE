import React from 'react'
import { PrimaryHeader, Header, Paragraph} from '../Components/Typography'
import {Box} from '@mui/material'
import PrimaryButton from '../Components/Button'

export default function ContactForm() {
  return (
    <Box component='section' 
        sx={{ py: '4rem', backgroundColor: '#DEE5EE', color: '#081F4A'}}
        px={{xs:3, sm:4, md:'9rem'}}
    >
        <PrimaryHeader pbSize='1rem'>Let’s give your business that head start</PrimaryHeader>
        <Paragraph styled='center'>
            We’ll show you how Zummit Africa can make your process easier and better
        </Paragraph>
    <Box>
       
        <PrimaryButton color= '#09090B' bgcolor='#FFEA00'>Get a demo</PrimaryButton> 
    </Box>
        
    </Box>
  )
}
