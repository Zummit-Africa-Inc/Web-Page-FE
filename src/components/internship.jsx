import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import internshipImage1 from '../Images/image15.png';
import internshipImage2 from '../Images/image11.png';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const internship = () => {
  const theme = createTheme();

  const usedStyles = makeStyles(() => ({
    responsive: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '3rem',
      '@media screen and (max-width: 800px)' : {
        flexDirection: 'column-reverse'
      }
    },
    image: {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '290px'
      }
    },
    text: {
      width: '100%',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '36px',
      display: 'flex',
      alignItems: 'center',
      color: '#FFFFFF',
      [theme.breakpoints.down('md')]: {
        padding: 0
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
      padding: '75px',
      color: '#FFFFFF'
    },

    boxtext: {
      width: '606px'
    }
  }));

  const classes = usedStyles();
  return (
    <div
      style={{
        backgroundColor: '#081F4A'
      }}
    >
      <Typography variant="h4" className={classes.header}>
        Our Internship Program
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid className={classes.responsive} container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingX: '60px'}}>
              <img className={classes.image} src={internshipImage1} alt="internship image1"/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingX: '60px', py: '60px' }}>
              <Typography variant="h6" style={{ color: 'white' }}>
                Zummit Africa Tech internship
              </Typography>
              <Typography className={classes.text}>
                The Internship is designed to give hands-on, practical
                experiences to our interns by getting them involved in real
                projects for real clients. The program is thorough and indepth
                but we do not fail to approach it with the Zummit workstyle in
                mind - the right blend of collaboration, work and fun! This
                helps our interns be industry ready, learn to deal with
                workplace pressure and quickly expand their knowledge.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingX: '60px', py: '60px'}}>
              <Typography variant="h6" style={{ color: 'white' }}>
                Who should apply
              </Typography>
              <Typography className={classes.text}>
                Anybody can apply. The Internship itself focuses on participants
                with prior experience either by going through the training
                phase, or self learning. However, if you have no prior
                experience, we still encourage you to apply you'll learn a lot
                from the experience. The internship is a full working experience
                that positions you for a successful career, join us, and we
                promise you'll come out better.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingX: '60px' }}>
              <img className={classes.image} src={internshipImage2} alt="internship" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default internship;
