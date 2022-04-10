import React, { useState } from 'react';
import { Box, Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios'

//custom imports
import { PrimaryHeader, Header } from '../Component/Typography';
import PrimaryButton from '../Component/Button';
import bgImage from '../Images/pattern_herringbone.png';

export default function AIinAction() {
  // Custom CSS for controlling the inputs and label
  const style = {
    formControl: { margin: '1.5rem .2rem' },
    label: { display: 'inline-block', paddingBottom: '.4rem' }
  };
  // MaterialUI Hook for Breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // states for form and answer
  const [data, setData] = useState('')
  const [context, setContext] = useState('')
  const [question, setQuestion] = useState('')

  //function to submit form to server
  const handleFormSubmit = async(e) => {
    e.preventDefault()

    //run check for empty fields
    if(context === '' || question === '') {
      return alert("Please fill all fields!")
    }

    //axios headers
    const headers = {
      'Content-Type': 'application/json'
    }
    //payload to be sent
    const payLoad = { question, context }

    axios.post(process.env.REACT_APP_AI_URL, payLoad, { headers })
    .then(res => setData(res.data.answer))
    .catch(err => console.log(err))

    //clear text fields
    setContext('')
    setQuestion('')
  }

  return (
    <Box
      component="section"
      sx={{ py: '4rem', backgroundImage: `url(${bgImage})`, color: '#FFFFFF' }}
      px={{ xs: 2, sm: 3, md: '6rem', lg: '9rem', xl: '15rem' }}
    >
      <PrimaryHeader pbSize="0">A.I in action</PrimaryHeader>
      <Header textSize="h6" textAlign="center">
        Brief demonstration of how A.I works
      </Header>
      <Grid container columnSpacing={6}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleFormSubmit} >
          <Box style={style.formControl}>
            <label htmlFor="company_name" style={style.label}>
              Enter body text / paragraph
            </label>
            <TextField
              id="filled-basic"
              fullWidth
              multiline
              rows="3.65"
              style={{ backgroundColor: 'white' }}
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </Box>
          <Box style={style.formControl}>
            <label htmlFor="fullnames" style={style.label}>
              Enter Question
            </label>
            <TextField
              id="filled-basic"
              fullWidth
              style={{ backgroundColor: 'white' }}
              size="small"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Box>
          <PrimaryButton
            color="#09090B"
            bgcolor="#FFEA00"
            margin="2rem 0"
            isDesktop={isDesktop}
            type='submit'
          >
            Generate answer
          </PrimaryButton>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box style={style.formControl}>
            <label htmlFor="company_name" style={style.label}>
              Answer
            </label>
            <TextField
              id="filled-basic"
              fullWidth
              multiline
              rows="7.5"
              style={{ backgroundColor: 'white' }}
              value={data}
              inputProps={
                { readOnly: true }
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
