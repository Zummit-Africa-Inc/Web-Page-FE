import React from 'react'
import {PrimaryHeader, Header} from '../Component/Typography'
import {Box} from '@mui/material'
import PrimaryButton from '../Component/Button'
import { TextField} from '@mui/material';
import '../CSS/contactSection.css'

export default function ContactSection() {
    const style={
        formControl: {margin: '1.5rem .2rem'}
    }
  return (
    <Box component='section' 
        sx={{ py: '4rem', backgroundColor: '#DEE5EE', color: '#081F4A'}}
        px={{xs:3, sm:4, md:'9rem'}}
    >
        <PrimaryHeader pbSize='1rem'>Let’s give your business that head start</PrimaryHeader>
        <Header styled='center' textSize='h6' textalign='center'>
            We’ll show you how Zummit Africa can make your process easier and better
        </Header>
    <Box className='contact-section'>
        <Box style={style.formControl}>
            <label htmlFor="fullnames">Full name</label>
            <TextField id="filled-basic" label="Full name" variant="filled" fullWidth style={{backgroundColor: 'white'}} size="small" />
        </Box>
        <Box style={style.formControl}>
            <label htmlFor="email">Email Address</label>
            <TextField id="filled-basic" label="Email Address" variant="filled" fullWidth style={{backgroundColor: 'white'}} size="small" />
        </Box>
        <Box style={style.formControl}>
            <label htmlFor="company_name">Company Name</label>
            <TextField id="filled-basic" label="Company Name" variant="filled" fullWidth style={{backgroundColor: 'white'}} size="small" />
        </Box>
        <Box style={style.formControl}>
            <label htmlFor="company_name">Message</label>
            <TextField id="filled-basic" label="Message" variant="filled" fullWidth multiline rows="5" style={{backgroundColor: 'white'}}/>
        </Box>
        <PrimaryButton color= '#09090B' bgcolor='#FFEA00'>Get a demo</PrimaryButton> 
    </Box>
        
    </Box>
  )
}
