import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { Alert, AppBar, Box, Button, Grid, TextField, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import Logo from '../Images/LOGO.png'
import { useEffect } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    width: '90vw',
    marginTop: '8rem',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    background: '#081F4A',
    borderRadius: '40px',
    '@media screen and (max-width: 850px)': {
      flexDirection: 'column',
      height: 'max-content',
      gap: '2rem'
    }
  },
  leftPane: {
    lineHeight: '30px',
  },
  formBox: {
    width: '470px',
    height: '680px',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(0deg, #C5D7F9, #C5D7F9), #C5D7F9',
    borderRadius: '40px',
    padding: '60px 31px',
    '@media screen and (max-width: 800px)': {
      width: 'fit-content',
      height: 'fit-content',
    }
  },
  form: {
    margin: '0 auto',
    display: 'flex',
    gap: '2rem',
    flexDirection: 'column',
  },
})

const key = process.env.REACT_APP_PAYSTACK_KEY
const base_url = process.env.REACT_APP_BASE_URL

const PaystackIntegration = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const classes = useStyles()
  const [status, setStatus] = useState('');
  const [qualification, setQualification] = useState('');
  const [amount, setAmount] = useState('')
  const [courses, setCourses] = useState()
  const [error, setError] = useState(null)

  const id = process.env.REACT_APP_COURSE_ID


  useEffect(() => {
    const getCourse = async () => {

      try {
        const res = await axios.get(`${base_url}/course/${id}`)
        setCourses(res.data.data)
        setAmount(res.data.data.price)
      } catch (err) {

      }
    }
    getCourse()
  }, [])

  const handlePay = (e) => {
    e.preventDefault()

    try {
      const paystackPay = new PaystackPop()
      paystackPay.newTransaction({
        key: key,
        amount: amount * 100,
        currency: 'NGN',
        email,
        firstName,
        lastName,
        metadata: {
          first_name: firstName,
          last_name: lastName,
          course_id: id
        },
        onClose: function () {
          alert('Are you sure you want to close this window?')
          setFirstName('')
          setLastName('')
          setEmail('')
          setStatus('')
          setQualification('')
        },
        callback: async function (response) {
          try {
            const res = await axios.post(`${base_url}/payments/verification?ref=${response.reference}`, response.reference)
            if (res.data.success) {
              window.location.href = `/payments/verify/${response.reference}`
            }
          } catch (err) {
            alert(err.message)
          }
        }
      })
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleChanges = (event) => {
    setQualification(event.target.value);
  };


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
      <div className={classes.root}>


        <div className={classes.container}>
          <div className={classes.leftPane}>
            <Typography
              variant="h2"
              align="left"
              sx={{
                fontWeight: '700',
                color: '#ECF2FD',
                lineHeight: '1',
              }}
              gutterBottom
            >
              Join our Data <br /> Science Live Online <br /> Course
            </Typography>
            <Typography
              variant="h4"
              align="left"
              paragraph
              sx={{
                fontWeight: '700',
                color: '#ECF2FD',
                paddingBottom: '20px',
                lineHeight: '1',
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
                paddingBottom: '20px',
                lineHeight: '1',
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
              <form className={classes.form}>
                {error && (
                  <Alert style={{ position: 'absolute', top: '10%', zIndex: 3 }} severity='error'>
                    {error}
                  </Alert>)}
                <Grid
                  sx={{
                    display: 'flex',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '10px',
                    gridGap: 18,
                    '@media screen and (max-width: 800px)': {
                      flexDirection: 'column',
                      paddingBottom: '0',
                    gridGap: 18,
                    }
                  }}
                >
                  <TextField
                    label="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    label="LastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                  <TextField
                  fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="employment-status-label">Employment Status</InputLabel>
                      <Select
                        labelId="employment-status-label"
                        id="employment-status"
                        value={status}
                        label="Employment Status"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Employed</MenuItem>
                        <MenuItem value={20}>Unemployed</MenuItem>
                        <MenuItem value={30}>Student</MenuItem>
                        <MenuItem value={40}>Self-Employed</MenuItem>
                        <MenuItem value={50}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="academic-qualification-label">Academic Qualification</InputLabel>
                      <Select
                        labelId="academic-qualification-label"
                        id="academic-qualification"
                        value={qualification}
                        label="Academic Qualification"
                        onChange={handleChanges}
                      >
                        <MenuItem value={10}>Under-Graduate</MenuItem>
                        <MenuItem value={20}>Graduate</MenuItem>
                        <MenuItem value={30}>Post-Graduate</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Button disabled={!firstName || !lastName || !email || !status || !qualification} disableElevation disableRipple onClick={handlePay} fullWidth variant="contained"
                    sx={{
                      background: '#FFEA00',
                      height: '60px',
                      color: 'black',
                      borderRadius: '5px',
                      fontWeight: '400',
                      fontSize: '20px',
                    }}>
                    ENROLL NOW
                  </Button>
                  <Divider variant="middle" />
                  <Typography color="text.secondary" variant="body4">
                    By clicking the "Enroll now" button, you are enroling in a Memorisely Bootcamp, and you agree to Zummit Afica Academy's <strong>Terms of Use</strong> and <strong>Privacy Policy</strong>.
                  </Typography>
                
              </form>
          </Box>
        </div>
      </div>
    </>
  )
}

export default PaystackIntegration