import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import { Alert, AppBar, Box, Button, Grid, Stack, TextField, Toolbar, Typography } from '@mui/material'
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
import { lineHeight } from '@mui/system'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '1200px',
    height: '800px',
    left: '40px',
    right: '40px',
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
  const classes = useStyles()
  const [status, setStatus] = useState('');
  const [qualification, setQualification] = useState('');
  const [amount, setAmount] = useState('')
  const [id, setId] = useState()
  const [courses, setCourses] = useState()
  const [error, setError] = useState(null)


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

    try{

      
      
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
          }catch (err) {
            alert(err.message)
          }
        }
      })
    } catch(err) {
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
                  color: '#ECF2FD',
                  lineHeight: '1',
                }}
                gutterBottom
              >
               Join our Data <br/> Science Live Online <br/> Course
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
            <Stack
                sx={{
                padding: '60px 31px',
              }}>
              <form>
              {error && (
        <Alert style={{ position: 'absolute', top: '10%', zIndex:3 }} severity='error'>
            {error}
        </Alert>)}
              <Grid
                    my={2}
                    sx={{
                      display: 'flex',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                      width: '400px',
                      paddingBottom: '10px',
                      gridGap: 18,
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

                <Stack spacing={3}
                    >
                  <TextField
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
                        <MenuItem value={10}>Bachelor's Degree</MenuItem>
                        <MenuItem value={20}>Masters Degree</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Button disabled={ !firstName || !lastName || !email || !status || !qualification } Elevation disableRipple onClick={handlePay} fullWidth variant="contained"
                  sx={{
                      background: '#FFEA00',
                      height:'60px',
                      color: 'black',
                      borderRadius: '5px',
                      fontWeight: '400',
                      fontSize: '20px',
                      lineHeight: '150%'
                    }}>
                      ENROLL NOW
                  </Button><br/><br/>
                  <Divider variant="middle"  sx={{ mt: 3, ml: 1, mb: 1 }}/><br/>
                  <Typography color="text.secondary" variant="body4">
                    By clicking the "Enroll now" button, you are enroling in a Memorisely Bootcamp, and you agree to Zummit Afica Academy's <strong>Terms of Use</strong> and <strong>Privacy Policy</strong>.
                  </Typography>
                </Stack>
              </form>
            </Stack>
          </Box>
      </div>
    </div>
  )
}

export default PaystackIntegration