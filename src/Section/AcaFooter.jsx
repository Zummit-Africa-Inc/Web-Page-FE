import React from 'react';
import { Stack, Grid, Typography, Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Logo from '../Images/acaLogo.png';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    padding: '40px 120px 40px 80px',
    backgroundColor: 'rgba(255, 255, 255, 0.7);'
  },
  conOne: {
    display: 'flex',
    marginBottom: '40px',
    // justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  conTwo: {
    display: 'flex',
    marginTop: '30px',
    marginBottom: '40px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
});

function AcaFooter() {
  const classes = useStyles();

  return (
    <Stack className={classes.footer}>
      <Grid className={classes.conOne}>
        <Grid>
          <Typography
            variant="h6"
            fontWeight={500}
            color="#081F4A"
            my={2}
            textTransform="capitalize"
            sx={{
              marginRight: '160px'
            }}
          >
            Lorem ipsum.
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Magna aliqua
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Duis aute
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Lorem Ipsum
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Excepteur
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            fontWeight={500}
            color="#081F4A"
            my={2}
            textTransform="capitalize"
            sx={{
              marginRight: '160px'
            }}
          >
            Lorem ipsum.
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Magna aliqua
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Duis aute
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Lorem Ipsum
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Excepteur
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            fontWeight={500}
            color="#081F4A"
            my={2}
            textTransform="capitalize"
            sx={{
              marginRight: '160px'
            }}
          >
            Newsletter
          </Typography>
          <Typography variant="subtitle2" color="#081F4A" mb={4}>
            Subscribe to our newsletter
          </Typography>
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <TextField
              label="Enter Email"
              sx={{
                width: '280px',
                height: '60px'
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                background: '#081F4A',
                borderRadius: '0px 15px 15px 0px',
                height: '56px',
                marginBottom: '5px'
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          width: '100%',
          background: '#061738',
          height: '5px',
          opacity: '0.7',
          borderRadius: '5px'
        }}
      />
      <Grid className={classes.conTwo}>
        <Grid>
          <Typography
            variant="h6"
            fontWeight={500}
            color="#081F4A"
            my={2}
            textTransform="uppercase"
          >
            Contact
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            TOJA, Southern View Estate
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Lekki
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Lagos State
          </Typography>
          <Typography variant="subtitle2" color="#081F4A">
            Nigeria
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Grid
            sx={{
              width: '167px',
              alignSelf: 'center'
            }}
          >
            <img src={Logo} />
          </Grid>
          <Typography
            variant="subtitle2"
            color="#081F4A"
            sx={{
              alignSelf: 'center'
            }}
          >
            © 2022 Zummit Africa Academy
          </Typography>
        </Grid>
        <Grid
          my={2}
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <FacebookRoundedIcon m={1} fontSize="large" />
          <LinkedInIcon m={1} fontSize="large" />
          <YouTubeIcon m={1} fontSize="large" />
          <InstagramIcon m={1} fontSize="large" />
          <TwitterIcon m={1} fontSize="large" />
        </Grid>
      </Grid>
    </Stack>
  );
}
export default AcaFooter;
