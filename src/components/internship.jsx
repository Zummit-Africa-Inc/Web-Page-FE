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
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse'
      }
      },
      text: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '36px',
        /* or 200% */

        display: 'flex',
        alignItems: 'center',

        color: '#FFFFFF'

      }
  }));

  const classes = usedStyles();
  return (
    <div style={{backgroundColor:"#081F4A"}}>
      <Box sx={{ flexGrow: 1, paddingX: "128px", paddingY:"213px" }}>
        <Grid className={classes.responsive} container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box>
              <img style={{width:"50%" , height:"50%"}} src={internshipImage1} alt="internship image1" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6">
                Zummit Africa Tech internship
              </Typography>
              <Typography className={classes.text}>
                The Internship is designed to give hands-on, practical
                experiences to our interns by getting them involved in real
                projects for real clients. The program is thorough and indepth
                but we do not fail to approach it with the Zummit workstyle in
                mind - the right blend of collaboration, work and fun! This helps
                our interns be industry ready, learn to deal with workplace
                pressure and quickly expand their knowledge.
              </Typography>
            </Box>
          </Grid>
        </Grid>
              <br />
              <br />
              <br />
              <br/>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
                      <Box sx={{
                        
                         
                          
            }}>
              <Typography variant="h6">Who should apply</Typography>

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

          <Grid item xs={12} md={6}>
            <Box>
              <img style={{display:'flex',justifyItems:"flex-end",width:"50%" , height:"50%"}} src={internshipImage2} alt="internship" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default internship;
