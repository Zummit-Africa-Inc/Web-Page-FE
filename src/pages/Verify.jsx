import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Logo from '../Images/LOGO.png'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const useStyles = makeStyles({
  verify: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto 0',
  },
  logo: {
    background: '#fff',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  link: {
    color: 'var(--color-primary)'
  }

})
const Verify = () => {
  const classes = useStyles()
  const { ref } = useParams()
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            background: '#f9f8f8',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <img src={Logo} alt="zummit-logo" />
        </Toolbar>
      </AppBar>
      <div className={classes.verify}>
        <Container>
          <Box>
            <Paper elevation={3} xs={6} md={12} sx={{
              padding: '2rem 1rem'
            }}>
              <img src={Logo} alt="thank-you" className={classes.logo} />
              <Typography variant='h4' textAlign='center'>Thank you for your order.</Typography>
              <Typography variant='subtitle1' textAlign='center'>Your order number is {ref}</Typography>
              <Typography 
                variant='subtitle1' 
                textAlign='center'
              >
                Go back to 
                <Link to='/academy' className={classes.link}>Zummit Academy</Link>
              </Typography>
            </Paper>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default Verify