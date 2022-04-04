import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react'
import Logo from '../Images/LOGO (1).png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//Material UI icons
export default function FooterSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
    let contactOrder = isMobile ? "1" : "6";
    let productOrder = isMobile ? "1" : "2";
    let companyOrder = isMobile ? "2" : "3";
    let resourcesOrder = isMobile ? "3" : "4";
    let legalOrder = isMobile ? "4" : "5";
    let vectorOrder = isMobile ? "5" : "5";

// Breakpoint padding

    return (
        <Box container
            component="footer"
            sx={{ py: "4rem", backgroundColor: "#FFFFFF", color: "#081F4A" }}
            px={{ xs: 3, sm: 4, md: "6rem" }}>

            <Grid container Spacingcolumn={6} Spacingrow={5}>
                <Grid item xs={6} lg={4} order={contactOrder} mt={{xs: 3, sm: 4, md: 6, lg: 0}} >
                    <img src={Logo} alt="Zummit Africa Logo" /> 
                    <Typography display="block">256 Chapman Road STE <Typography>
                        105-4, Newark. Newcastle</Typography>
                        Delaware, USA.</Typography>
                    <Typography display="block">TOJA Southern View Estate,</Typography>
                        <Typography display="block">Lekki - Lagos, Nigeria.</Typography>
                    <Typography display="block">contact@zummitafrica.com
                        <Typography>+234 816 3816 789</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={2} order={productOrder} >
                    <Typography display="block" variant="h6" component="h6">
                        Products
                    </Typography>
                    <Link href="/Apis" underline="none" color="#081F4A">
                        <Typography display="block">AI APIs</Typography>
                    </Link>
                    <Link href="/Detect" underline="none" color="#081F4A">
                        <Typography display="block">Emotion Detection</Typography>
                    </Link>
                    <Link href="/drows" underline="none" color="#081F4A">
                        <Typography display="block">Drowsiness Detection</Typography>
                    </Link>
                    <Link href="/chat" underline="none" color="#081F4A">
                        <Typography display="block">Chat bots</Typography>
                    </Link>
                    <Link href="/Face" underline="none" color="#081F4A">
                        <Typography display="block">Face recognition</Typography>
                    </Link>
                    <Link href="/sentiment" underline="none" color="#081F4A">
                        <Typography display="block">Sentiment analysis</Typography>
                    </Link>
                </Grid>
                <Grid item xs={6} lg={2}  pl={{ xs: '2rem', sm: 4, md: 6, lg:'2rem' }} order={companyOrder}>
                    <Typography variant="h6" component="h6">
                        Company
                    </Typography>
                    <Link href="/About" underline="none" color="#081F4A">
                        <Typography display="block">About</Typography>
                    </Link>
                    <Link href="/Service" underline="none" color="#081F4A">
                        <Typography display="block">Services</Typography>
                    </Link>
                    <Link href="/Internship" underline="none" color="#081F4A">
                        <Typography display="block">Internship</Typography>
                    </Link>
                    <Link href="/Contact" underline="none" color="#081F4A">
                        <Typography display="block">Contact</Typography>
                    </Link>
                </Grid>
                <Grid item xs={6} lg={2}   mt={{ xs: '2rem', sm: 4, md: 6, lg: 0}} order={resourcesOrder}>
                    <Typography variant="h6" component="h6">
                        Resources
                    </Typography>
                    <Link href="/Blog" underline="none" color="#081F4A">
                        <Typography display="block">Blog</Typography>
                    </Link>
                    <Link href="/Customer" underline="none" color="#081F4A">
                        <Typography display="block">Customers</Typography>
                    </Link>
                </Grid>
                <Grid item xs={6} lg={2}  mt={{ xs: '2rem', sm: 4, md: 6, lg: 0}} pl={{ xs: '2rem', sm: 4, md: 6,lg:0 }} order={legalOrder}>
                    <Typography variant="h6" component="h6">
                        Legal
                    </Typography>
                    <Link href="/Terms" underline="none" color="#081F4A">
                    
                        <Typography display="block">Terms</Typography>
                       
                    </Link>
                    <Link href="/Privacy" underline="none" color="#081F4A">
                        <Typography display="block">Privacy</Typography>
                    </Link>
                </Grid>

            </Grid>
            <Grid container mt={{ xs: '2rem', sm: 4, md: 6, lg: 4}} >
                <Grid item xs={12} lg={6} >
                    <Box mt={4} mr={{ xs: '1rem', lg: '1rem'}} display='inline-block'>
                        <FacebookIcon />
                    </Box>
                    <Box mt={4} mr={{ xs: '1rem', lg: '1rem'}} display='inline-block'>
                        <TwitterIcon />
                    </Box>
                    <Box mt={4} mr={{ xs: '1rem', lg: '1rem'}} display='inline-block'>
                        <LinkedInIcon />
                    </Box>
                    
                   
                   

                </Grid>
                
                <Grid item xs={12} mt={{ xs: '1rem'}} lg={6} display="flex" justifyContent= {isMobile ? "flex-end":"flex-start"} order={vectorOrder} 
                pr={isMobile ? '7rem' : '0'}>
                   &copy; 2022, Zummit Africa.
                </Grid>

            </Grid>

        </Box>
    )
}