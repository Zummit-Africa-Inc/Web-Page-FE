import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { InternsText } from '../Component/Typography';
import { createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

import tracksimage1 from '../Images/Group 76.png';
import tracksimage2 from '../Images/Group 74.png';
import tracksimage3 from '../Images/Deep learning icon.png';


const InternshipTracks = () => {
  const [email, setEmail] = useState('')

  const theme = createTheme();

  const usedStyles = makeStyles(() => ({
    box: {
      [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        flexDirection: 'column'
      }
    },
    header: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: '26px',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '100px',
      paddingBottom: '30px',
      color: '#FFFFFF',
      textAlign: 'center',
      marginLeft: "auto",
      marginRight: 'auto'
    },
    text: {
      padding: '10px'
    },
    textbox: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      marginLeft: "auto",
      marginRight: 'auto'
    },
    root: {
      '& .MuiFilledInput-root': {
        background: 'white',
        borderRadius: '4px 0 0 4px',
        width: '60vh',
        height: '100%',
        marginLeft: "auto",
        marginRight: 'auto',
        [theme.breakpoints.down('md')]: {
          width: '80vw',
          marginBottom: '2rem'
        }
      }
    },
    select: {
      background: '#fff'
    },
    formConrol: {
      width: '100%',
      height: '200px',
      display: 'grid',
      placeItems: 'center',
      marginLeft: "auto",
      marginRight: 'auto'
    },
    form: {
      width: '100%',
      height: '55px',
      display: 'flex',
      alignItems: 'center',
      marginLeft: "auto",
      marginRight: 'auto', 
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        height: '150px'
      }
    }
  }));

  const classes = usedStyles();

  const handleJoinWaitlist = async(e) => {
    e.preventDefault()
    
     //run check for empty fields
     if(email === '') return alert('Please fill all fields!')

     //payload to be sent
     const payLoad = { email, category: 'general' }
   
     //axios request for demo
     const res = await fetch(process.env.REACT_APP_WAITLIST_URL, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(payLoad)
     })
     const data = await res.json()
     alert(data.message)
 
     //reset textfields to empty
     setEmail('')
  }

  return (
    <div style={{ backgroundColor: '#081F4A' }}>
      <Typography variant="h2" className={classes.header}>
        Currently available internship tracks
      </Typography>

      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 5,
            p: 3,
            // width: 414,
            // height: 354
          }
        }}
        className={classes.box}
      >
        <Paper elevation={3}>
          <Box className={classes.textbox}>
            <img
              src={tracksimage1}
              width="40"
              height="40"
              alt="deep learning"
            />

            <Typography
              component="p"
              sx={{ fontSize: '15px', display: 'flex', paddingBottom: '6px' }}
              className={classes.text}
            >
              Deep Learing
            </Typography>
          </Box>

          <InternsText>
            You will go through a structured learning path under the supervision
            of an expert.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15', marginRight:"5px" }} />
            Participate in Peer-to-peer challenges that will prepare you for job
            interviews in AI.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green ', fontSize: '15', marginRight:"5px" }} />
            Participate in paper reviews of cutting-edge technology and
            techniques, learning the state of the art in the industry.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15', marginRight:"5px" }} />
            Build AI models with a team from end to end Learn MLops.
          </InternsText>
        </Paper>

        <Paper elevation={3}>
          <Box className={classes.textbox}>
            <img
              src={tracksimage2}
              width="40"
              height="40"
              alt="deep learning"
            />
            <Typography
              component="p"
              sx={{ fontSize: '15px', display: 'flex', paddingBottom: '6px' }}
              className={classes.text}
            >
              Web Development
            </Typography>
          </Box>
          <InternsText>
            You will go through a structured learning path under the supervision
            of an expert.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15', marginRight:"5px" }} />
            Participate in Peer-to-peer challenges that will prepare you for job
            interviews in software development.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15', marginRight:"5px" }} />
            Learn how to build solutions using cutting-edge and in-demand
            technologies.{' '}
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15', marginRight:"5px" }} />
            Build real-world solutions.{' '}
          </InternsText>
        </Paper>

        <Paper elevation={3}>
          <Box className={classes.textbox}>
            <img
              src={tracksimage3}
              width="40"
              height="40"
              alt="deep learning"
            />
            <Typography
              component="p"
              sx={{ fontSize: '15px', display: 'flex', paddingBottom: '6px' }}
              className={classes.text}
            >
              Data Science
            </Typography>
          </Box>

          <InternsText>
            You will go through a structured learning path under the supervision
            of an expert.
          </InternsText>

          <InternsText>
            <CheckCircleIcon
              fontSize="small"
              style={{ color: 'green', fontSize: '15', marginRight:"5px" }}
            />
            Learn to collect, clean and analyze messy data.
          </InternsText>

          <InternsText>
            <CheckCircleIcon
              fontSize="small"
              style={{ color: 'green', fontSize: '15', marginRight:"5px" }}
            />
            Solve business problems with data.
          </InternsText>

          <InternsText>
            <CheckCircleIcon
              fontSize="small"
              style={{ color: 'green', fontSize: '15', marginRight:"5px" }}
            />
            Build and deploy machine learning models at scale.
          </InternsText>
        </Paper>
      </Box>

      <Box className={classes.formConrol}>
        <form onSubmit={handleJoinWaitlist} className={classes.form}>
          <TextField
            className={classes.root}
            spacing={{ m: 10 }}
            label="Email Address"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Button
            style={{
              borderRadius: '0 4px 4px 0',
              backgroundColor: '#FFEA00',
              color: 'black',
              height: '56px'
            }}
            color="secondary"
            variant="contained"
            type='submit'
          >
            Join the WaitList
          </Button>
        </form>
        </Box>
    </div>
  );
}


export default InternshipTracks