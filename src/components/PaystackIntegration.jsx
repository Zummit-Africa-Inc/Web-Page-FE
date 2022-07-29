import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { AppBar, Box, Button, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import Logo from '../Images/LOGO.png'
import { useEffect } from 'react'

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '1200px',
    height: '800px',
    left: '120px',
    top: '140px',
    background: '#081F4A',
    borderRadius: '40px',
  },
  leftPane: {
    position: 'absolute',
    lineHeight: '30px',
    left: '102px',
    top: '120px',
  },
  formBox: {
    position: 'absolute',
    width: '470px',
    height: '680px',
    right: '50px',
    top: '50px',
    bottom: '50px',
    background: 'linear-gradient(0deg, #C5D7F9, #C5D7F9), #C5D7F9',
    borderRadius: '40px',
  },
  form: {
    margin: '0 auto',
    width: '40%',
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const key = process.env.REACT_APP_PAYSTACK_KEY
const base_url = process.env.REACT_APP_BASE_URL

const PaystackIntegration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const classes = useStyles()
  const [id, setId] = useState()
  const [courses, setCourses] = useState()


  useEffect(() => {
    const getCourse = async () => {

      try{
        const res = await axios.get(`${base_url}/course`)
        setCourses(res.data.data[0])
        setAmount(res.data.data[0].price)
        setId(res.data.data[0].id)
      } catch(err) {
        
      }
    }
    getCourse()
  }, [])

  const handlePay = (e) => {
    e.preventDefault()

    const paystackPay = new PaystackPop()
    paystackPay.newTransaction({
      key: key,
      amount: amount * 100,
      email,
      firstName,
      lastName,
      metadata: {
        first_name: firstName,
        last_name: lastName,
        course_id: id
      },
      onClose: function () {
        alert('closed window')
      },
      callback: async function (response) {
        try {
          const res = await axios.post(`${base_url}/payments/verification?ref=${response.reference}`, response.reference)
         if (res.data.success) {
          window.location.href = `/payments/verify/${response.reference}`
         }
        }catch (err) {
          alert(err.message)
        }
      }
    })
  }
  return (
    <div> 
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


      <div className={classes.root}>
          <div className={classes.leftPane}>
            <Typography
                variant="h2"
                align="left"
                sx={{
                  fontWeight: '700',
                  color: '#ECF2FD'
                }}
                gutterBottom
              >
               Join our Data <br/> Science Live Online <br/> Course
            </Typography>
            <Typography
                variant="h6"
                align="left"
                paragraph
                sx={{
                  fontWeight: '700',
                  color: '#ECF2FD',
                  paddingBottom: '20px'
                }}
              >
               $100
            </Typography>
            <Typography
                variant="h6"
                align="left"
                paragraph
                sx={{
                  fontWeight: '500',
                  color: '#ECF2FD',
                  paddingBottom: '20px'
                }}
              >
              6 Weeks
            </Typography>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'left',
                marginBottom: '22px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#FFEA00'
                }}
              />
              <Typography variant="h6" color="#ECF2FD" fontWeight={400}>
                600+ hours of coursework
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'left',
                marginBottom: '22px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#FFEA00'
                }}
              />
              <Typography variant="h6" color="#ECF2FD" fontWeight={400}>
                4 real-world portfolio projects
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'left',
                marginBottom: '22px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#FFEA00'
                }}
              />
              <Typography variant="h6" color="#ECF2FD" fontWeight={400}>
                24 weeks part-time program
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'left',
                marginBottom: '22px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#FFEA00'
                }}
              />
              <Typography variant="h6" color="#ECF2FD" fontWeight={400}>
                Mentorship with Industry experts
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'left',
                marginBottom: '22px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#FFEA00'
                }}
              />
              <Typography variant="h6" color="#ECF2FD" fontWeight={400}>
                Mentorship with Industry experts
              </Typography>
            </Grid>
          </div>

          <Box className={classes.formBox}>
            <Typography variant='h3' textAlign='center' sx={{ marginTop: '6rem' }} gutterBottom>Checkout Page</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="FirstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="filled"
              />
              <TextField
                required
                fullWidth
                label="LastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="filled"
              />
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
              />
              <TextField
              disabled
                required
                fullWidth
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="filled"
              />
              <Button disableElevation disableRipple onClick={handlePay} fullWidth variant="contained"
               sx={{
                  background: '#FFEA00',
                  color: 'black',
                  borderRadius: '5px',
                }}>
                  ENROLL NOW
                </Button>
            </form>
          </Box>
      </div>
    </div>
  )
}

export default PaystackIntegration