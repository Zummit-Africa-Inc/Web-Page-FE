import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { TextField } from '@mui/material';

import PrimaryButton from '../Component/Button';
import { PrimaryHeader } from '../Component/Typography';
import '../CSS/contactSection.css';

export default function ContactSection() {
  //states for form input
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [message, setMessage] = useState('')

  // MaterialUI Hook for Breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
  let customWidth = isMobile ? '50%' : '100%';
  let customFontsize = isMobile ? '2.125rem' : '1.9rem';
  let customFontsize2 = isMobile ? '1.125rem' : '.9rem';
  let customPadding = isMobile ? '.5rem 17rem' : '0 1rem';
  let customFontWeight = isMobile ? '400' : '500';

  const style = {
    formControl: { margin: '1.5rem .2rem' },
    label: { display: 'inline-block', paddingBottom: '.4rem' }
  }
  
  const handleDemoRequest = async(e) => {
    e.preventDefault()

    //run check for empty fields
    if(fullName === ''|| email === '' || companyName === '' || message === '') return alert('Please fill all fields!')

    //payload to be sent
    const payLoad = { fullName, email, companyName, message }
  
    //axios request for demo
    const res = await fetch(process.env.REACT_APP_DEMO_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payLoad)
    })
    const data = await res.json()
    alert(data.message)

    //reset textfields to empty
    setFullName('')
    setEmail('')
    setCompanyName('')
    setMessage()
  }
  

  return (
    <Box
      component="section"
      sx={{ py: '4rem', backgroundColor: '#DEE5EE', color: '#081F4A' }}
      px={{ xs: 3, sm: 4, md: '9rem', xl: '18rem' }}
    >
      <PrimaryHeader pbSize="1rem" fontSize={customFontsize}>
        Let’s give your business that head start
      </PrimaryHeader>
      <Typography
        component="h6"
        variant="h6"
        textAlign="center"
        p={customPadding}
        fontSize={customFontsize2}
        fontWeight={customFontWeight}
      >
        We’ll show you how Zummit Africa can make your process easier and better
      </Typography>
      <Box
        className="contact-section" sx={{ width: `${customWidth}`, margin: '3rem auto 0 auto' }}>
        <form onSubmit={handleDemoRequest}>
        <Box style={style.formControl}>
          <label htmlFor="fullnames" style={style.label}>
            Full name
          </label>
          <TextField
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="filled-basic"
            fullWidth
            style={{ backgroundColor: 'white' }}
            size="small"
          />
        </Box>
        <Box style={style.formControl}>
          <label htmlFor="email" style={style.label}>
            Email Address
          </label>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="filled-basic"
            fullWidth
            style={{ backgroundColor: 'white' }}
            size="small"
          />
        </Box>
        <Box style={style.formControl}>
          <label htmlFor="company_name" style={style.label}>
            Company Name
          </label>
          <TextField
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            id="filled-basic"
            fullWidth
            style={{ backgroundColor: 'white' }}
            size="small"
          />
        </Box>
        <Box style={style.formControl}>
          <label htmlFor="message" style={style.label}>
            Message
          </label>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="filled-basic"
            fullWidth
            multiline
            rows="5"
            style={{ backgroundColor: 'white' }}
          />
        </Box>
        <PrimaryButton type='submit' color="#09090B" bgcolor="#FFEA00" margin="5rem auto">
          Get a demo
        </PrimaryButton>
        </form>
      </Box>
    </Box>
  );
}
