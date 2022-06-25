import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';

import Logo from '../Images/LOGO.png';
import Instagram from '../Images/instagram.png';
import Twitter from '../Images/Twitter.png';
import Linkedln from '../Images/Linkedln.png';
//Material UI icons

export default function FooterSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
  let contactOrder = isMobile ? '1' : '6';
  let productOrder = isMobile ? '1' : '2';
  let companyOrder = isMobile ? '2' : '3';
  let resourcesOrder = isMobile ? '3' : '4';
  let legalOrder = isMobile ? '4' : '5';
  let vectorOrder = isMobile ? '5' : '5';

  // Breakpoint padding

  return (
    <Box
      container
      component="footer"
      sx={{ py: '4rem', backgroundColor: '#FFFFFF', color: '#081F4A' }}
      px={{ xs: 3, sm: 4, md: '6rem' }}
    >
      <Grid container pacingcolumn={6} spacingrow={5} >
        <Grid
          item
          xs={6}
          lg={4}
          order={contactOrder}
          mt={{ xs: 3, sm: 4, md: 6, lg: 0 }}
        >
          <img src={Logo} alt="Zummit Africa Logo" />

          <Typography
            display="block"
            mt={2}
            py={1}
            fontSize={16}
            fontWeight={500}
          >
            2055 Limestone Rd STE <br /> 200-C, Wilmington, DE, New Castle, <br />{' '}
            US, 19808.
          </Typography>
          <Typography display="block" py={1} fontSize={16} fontWeight={500}>
            TOJA Southern View Estate, <br /> Lekki - Lagos, Nigeria
          </Typography>

          <Typography display="block" fontSize={16} fontWeight={500}>
            contact@zummitafrica.com <br />
            +234 816 3816 789
          </Typography>
        </Grid>
        <Grid item xs={6} lg={2} order={productOrder}>
          <Typography display="block" py={2} variant="h6" component="h6">
            Products
          </Typography>
          <Link href="/apis" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              AI APIs
            </Typography>
          </Link>
          <Link href="/detect" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Emotion Detection
            </Typography>
          </Link>
          <Link href="/drows" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Drowsiness Detection
            </Typography>
          </Link>
          <Link href="/chat" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Chat bots
            </Typography>
          </Link>
          <Link href="/face" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Face recognition
            </Typography>
          </Link>
          <Link href="/sentiment" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Sentiment analysis
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          lg={2}
          pl={{ xs: '2rem', sm: 4, md: 6, lg: '2rem' }}
          order={companyOrder}
        >
          <Typography py={2} variant="h6" component="h6">
            Company
          </Typography>
          <Link href="/about" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              About
            </Typography>
          </Link>
          <Link href="/services" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Services
            </Typography>
          </Link>
          <Link href="/internship" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Internship
            </Typography>
          </Link>
          <Link href="/contact" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Contact
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          lg={2}
          mt={{ xs: '2rem', sm: 4, md: 6, lg: 0 }}
          order={resourcesOrder}
        >
          <Typography py={2} variant="h6" component="h6">
            Resources
          </Typography>
          <Link href="/blog" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Blog
            </Typography>
          </Link>
          <Link href="/customer" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Customers
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={6}
          lg={2}
          mt={{ xs: '2rem', sm: 4, md: 6, lg: 0 }}
          pl={{ xs: '2rem', sm: 4, md: 6, lg: 0 }}
          order={legalOrder}
        >
          <Typography py={2} variant="h6" component="h6">
            Legal
          </Typography>
          <Link href="/terms" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Terms
            </Typography>
          </Link>
          <Link href="/privacy" underline="none" color="#081F4A">
            <Typography display="block" py={1} fontSize={14} fontWeight={500}>
              Privacy
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <div id='contact'>
      <Grid container mt={{ xs: '2rem', sm: 4, md: 6, lg: 4 }}>
        <Grid item xs={12} lg={6} fontSize={10}>
        <Link href="https://mobile.twitter.com/zummitafrica" underline="none" color="#081F4A">
          <Box mt={4} mr={{ xs: '1rem', lg: '1rem' }} display="inline-block">
            <img src={Twitter} alt="Twitter" />
          </Box>
        </Link>
        <Link href="https://www.instagram.com/zummitafrica/" underline="none" color="#081F4A">
          <Box mt={4} mr={{ xs: '1rem', lg: '1rem' }} style={{color:'#081F4A'}} display="inline-block">
            <img src={Instagram} alt="Instagram" />
          </Box>
        </Link>
        <Link href="https://www.linkedin.com/company/zummit-africa/" underline="none" color="#081F4A">
          <Box mt={4} mr={{ xs: '1rem', lg: '1rem' }} display="inline-block">
            <img src={Linkedln} alt="Linkedln" />
          </Box>
        </Link>
        </Grid>

        <Grid
          item
          xs={12}
          mt={{ xs: '1rem' }}
          lg={6}
          display="flex"
          fontSize={14}
          fontWeight={500}
          justifyContent={isMobile ? 'flex-end' : 'flex-start'}
          order={vectorOrder}
          pr={isMobile ? '7rem' : '0'}
        >
          &copy; 2022, Zummit Africa.
        </Grid>
      </Grid>
      </div>
    </Box>
  );
}
