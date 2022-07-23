import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
  // box: {
  //   background: '#081f4a',
  // },
  form: {
    margin: '3rem auto',
    width: '40%',
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
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
      callback: async function (response) {

        // window.location.href = `${base_url}/payments/verification/?ref=${response.reference}`

        try {
          const res = await axios.post(`${base_url}/payments/verification?ref=${response.reference}`, response.reference)
          // const data = await res.json()
         if (res.data.success) {
          window.location.href = '/payments/verify'
         }
        }catch (err) {
          console.log(err.message)
        }
      }
    })
  }
  return (
    <>
      <Box>
        <Typography variant='h6' textAlign='center'>Payment Gateway</Typography>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: 'center'
          }}
        >

          <Grid item>
            <Button href='/academy'
              variant="contained"
              sx={{
                backgroundColor: '#FFEA00',
                borderRadius: '10px',
                padding: '10px 10px',
                color: '#000',
                fontSize: '10px'
              }}
            >
              Back to Academy
            </Button>
          </Grid>
        </Grid>
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