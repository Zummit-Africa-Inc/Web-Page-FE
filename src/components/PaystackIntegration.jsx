import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { AppBar, Box, Button, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import Logo from '../Images/LOGO.png'
import { useEffect } from 'react'

const useStyles = makeStyles({
  // box: {
  //   background: '#081f4a',
  // },
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
      <Box className={classes.box}>
        <Typography variant='h3' textAlign='center' sx={{ marginTop: '6rem' }} gutterBottom>Checkout Page</Typography>
        <form className={classes.form}>
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
          <Button disableElevation disableRipple onClick={handlePay} fullWidth variant="contained">PAY</Button>
        </form>
      </Box>
    </>
  )
}

export default PaystackIntegration