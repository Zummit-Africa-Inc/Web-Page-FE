import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { InternsText } from '../Component/Typography';
import tracksimage1 from '../Images/Group 76.png';
import tracksimage2 from '../Images/Group 74.png';
import tracksimage3 from '../Images/Deep learning icon.png';
import { createTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Grid, TextField, Button } from '@mui/material';

export default function internshipTracks() {
  const theme = createTheme();

  const usedStyles = makeStyles(() => ({
    box: {
      [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        flexDirection: 'column'
      }
    },
    header: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '26px',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '100px',
      paddingBottom: '30px',
      color: '#FFFFFF'
    },
    text: {
      padding: '10px'
    },
    textbox: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px'
    },
    root: {
      '& .MuiFilledInput-root': {
        background: 'white',
        borderRadius: '4px 0 0 4px',
        width: '60vh',
        height: '10%',
        [theme.breakpoints.down('md')]: {
          width: '30vh'
        }
      }
    }
  }));

  const classes = usedStyles();
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
            width: 414,
            height: 354
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
            <CheckCircleIcon style={{ color: 'green', fontSize: '15' }} />
            Participate in Peer-to-peer challenges that will prepare you for job
            interviews in AI.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green ', fontSize: '15' }} />
            Participate in paper reviews of cutting-edge technology and
            techniques, learning the state of the art in the industry.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15' }} />
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
            <CheckCircleIcon style={{ color: 'green', fontSize: '15' }} />
            Participate in Peer-to-peer challenges that will prepare you for job
            interviews in software development.
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15' }} />
            Learn how to build solutions using cutting-edge and in-demand
            technologies.{' '}
          </InternsText>

          <InternsText>
            <CheckCircleIcon style={{ color: 'green', fontSize: '15' }} />
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
              style={{ color: 'green', fontSize: '15' }}
            />
            Learn to collect, clean and analyze messy data.
          </InternsText>

          <InternsText>
            <CheckCircleIcon
              fontSize="small"
              style={{ color: 'green', fontSize: '15' }}
            />
            Solve business problems with data.
          </InternsText>

          <InternsText>
            <CheckCircleIcon
              fontSize="small"
              style={{ color: 'green', fontSize: '15' }}
            />
            Build and deploy machine learning models at scale.
          </InternsText>
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#081F4A',
          justifyContent: 'center',

          '& > :not(style)': {
            m: 5,
            p: 3
          }
        }}
      >
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid item>
            <TextField
              fullWidth
              className={classes.root}
              spacing={{ m: 10 }}
              label="Email Address"
              variant="filled"
            />
          </Grid>

          <Grid item alignItems="stretch" style={{ display: 'flex' }}>
            <Button
              style={{
                borderRadius: '0 4px 4px 0',
                backgroundColor: '#FFEA00',
                color: 'black'
              }}
              color="secondary"
              variant="contained"
            >
              Join the WaitList
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
