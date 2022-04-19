//commenting to test the import error issues here
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Paragraph, Header } from '../Component/Typography';
import PrimaryButton from '../Component/Button';
import ReactLogo from '../Images/arrow-next.svg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function SectionTwo() {
  // MaterialUI breakpoints Hook
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      component="section"
      sx={{ py: '6rem', backgroundColor: '#DEE5EE', color: '#081F4A' }}
      px={{ xs: 3, sm: 4, md: '9rem', xl: '18rem' }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Header textSize="h4">
            Why Zummit Africa for artificial intelligence?
          </Header>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paragraph>
            We are inspired by the innate will to make things easier, better and
            faster. For organizations to leverage A.I to build solutions, they
            need a team of ML engineers. This takes time and a lot of resources
            to build. Zummit Africa comes to the aid by helping your
            organization build your A.I solutions, so you can spend less time
            and money worrying about the problem, while we focus on providing
            the solution and improving your busness as you want.
          </Paragraph>
          <PrimaryButton
            color="#09090B"
            bgcolor="#FFEA00"
            marginTop="10rem"
            isDesktop={isDesktop}
          >
            <a href='#contact'>
            Contact us{' '}
            <img
              src={ReactLogo}
              alt="React Logo"
              style={{
                paddingLeft: '.5rem',
                height: '1.2rem',
                width: '1.2rem'
              }} />
            </a>
          </PrimaryButton>
        </Grid>
      </Grid>
    </Box>
  );
}
