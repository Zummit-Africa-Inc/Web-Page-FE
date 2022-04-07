import React from 'react';
import { PrimaryHeader } from '../Component/Typography';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PrimaryButton from '../Component/Button';
import { TextField } from '@mui/material';
import '../CSS/contactSection.css';

export default function ContactSection() {
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
  };
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
        className="contact-section"
        sx={{ width: `${customWidth}`, margin: '3rem auto 0 auto' }}
      >
        <Box style={style.formControl}>
          <label htmlFor="fullnames" style={style.label}>
            Full name
          </label>
          <TextField
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
            id="filled-basic"
            fullWidth
            style={{ backgroundColor: 'white' }}
            size="small"
          />
        </Box>
        <Box style={style.formControl}>
          <label htmlFor="company_name" style={style.label}>
            Message
          </label>
          <TextField
            id="filled-basic"
            fullWidth
            multiline
            rows="5"
            style={{ backgroundColor: 'white' }}
          />
        </Box>
        <PrimaryButton color="#09090B" bgcolor="#FFEA00" margin="5rem auto">
          Get a demo
        </PrimaryButton>
      </Box>
    </Box>
  );
}
