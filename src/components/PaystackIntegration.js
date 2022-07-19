import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { Box, Button, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

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

const PaystackIntegration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const classes = useStyles()

  const handlePay = (e) => {
    e.preventDefault()

    const paystackPay = new PaystackPop()
    paystackPay.newTransaction({
      key: key,
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction){
        let message = `Conratulations! Payment Successful! Reference ${transaction.reference}`
        alert(message)
      },
      onCancel(){
        alert('Transaction Cancelled')
      }
    })
  }
  return (
    <Box>
      <Typography variant='h6' textAlign='center'>Payment Gateway</Typography>
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
  )
}

export default PaystackIntegration