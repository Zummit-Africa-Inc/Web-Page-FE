import React from 'react'
import { Box, Grid,TextField,useMediaQuery, useTheme,} from '@mui/material'
import {PrimaryHeader, Header} from '../Component/Typography'
import PrimaryButton from '../Component/Button'
import bgImage from '../Images/pattern_herringbone.png'

export default function AIinAction() {
  // Custom CSS for controlling the inputs and label
  const style = {
    formControl: { margin: '1.5rem .2rem' },
    label: { display: 'inline-block', paddingBottom: '.4rem' }
  };
  // MaterialUI Hook for Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box component='section' 
        sx={{ py: '4rem', backgroundImage: `url(${bgImage})`, color: '#FFFFFF' }}
        px={{xs:2, sm:3, md:'6rem', lg:'9rem', xl:'15rem'}}
    >
        <PrimaryHeader pbSize='0'>A.I in action</PrimaryHeader>
        <Header textSize='h6' textAlign='center'>
            Brief demonstration of how A.I works
        </Header>
    <Grid container columnSpacing={6} >
        <Grid item xs={12}  md={6}>
        <Box style={style.formControl}>
            <label htmlFor="company_name" style={style.label}>Enter body text / paragraph</label>
            <TextField id="filled-basic" fullWidth multiline rows="3.65" style={{backgroundColor: 'white'}}/>
        </Box>
        <Box style={style.formControl}>
            <label htmlFor="fullnames" style={style.label}>Enter Question</label>
            <TextField id="filled-basic" fullWidth style={{backgroundColor: 'white'}} size="small" />
        </Box>
        <PrimaryButton color= '#09090B' bgcolor='#FFEA00' margin="2rem 0" isDesktop={isDesktop}>Generate answer</PrimaryButton> 
        </Grid>
        <Grid item xs={12}  md={6}>
        <Box style={style.formControl}>
            <label htmlFor="company_name" style={style.label}>Answer</label>
            <TextField id="filled-basic" fullWidth multiline rows="7.5" style={{backgroundColor: 'white'}}/>
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
