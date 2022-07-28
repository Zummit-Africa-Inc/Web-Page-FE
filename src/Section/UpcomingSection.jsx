import { Button, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import '../CSS/upcomingSection.css'
import writingImage from '../Images/writingImage.png'
import EllipsesTop from '../Images/EllipsesTop.png'
import EllipsesBtm from '../Images/EllipsesBtm.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    upcomingSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        background: 'radial-gradient(48.41% 206.28% at 44.72% 44.64%, rgba(255, 234, 0, 0.2) 3.65%, rgba(8, 31, 74, 0.2) 100%)',
        paddingTop: '15rem',
        paddingBottom: '10rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        '@media screen and (max-width: 800px)': {
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '10rem',
        }
    },
    box: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'flex-end',
        width: '997px',
        height: '532px',
        background: '#081F4A',
        borderRadius: '30px',
        '@media screen and (max-width: 800px)': {
            width: 'max-content',
            height: 'max-content',
        }
    },
    boxText: {
        display: 'flex',
        flexDirection: 'column',
        margin: '6rem 2rem',
        gap: '2rem',
        justifyContent: 'center',
        textAlign: 'right',
        alignItems: 'flex-end',
        '@media screen and (max-width: 800px)': {
            textAlign: 'justify',
            alignItems: 'center',
        }
    },

})

const UpcomingSection = () => {
    const classes = useStyles()
    return (
        <Box className={classes.upcomingSection}>
            <Stack className={classes.box}>
                <Stack className={classes.boxText}>
                    <Typography
                        className={classes.boxHeader}
                        variant='h5'
                        sx={{
                            fontWeight: '700',
                            fontSize: '58px',
                            lineHeight: '70px',
                            textAlign: 'center',
                            color: '#ECF2FD',
                        }}
                    >
                        Join the upcoming batch
                    </Typography>
                    <Typography
                        className={classes.boxParagraph}
                        variant='p'
                        sx={{
                            fontWeight: '400',
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: '#ECF2FD',
                        }}
                    >
                        The next batch starts September, 2022 and is limited to 100 <br /> participants.
                        Once we receive your application,
                        we‘ll call you to <br /> determine if the program is the right fit for you and discuss how <br /> we can help you achieve your career goals.
                    </Typography>

                    <Stack direction='row' spacing={2} className='buttons'>
                        <Button 
                            href='/payments'
                            variant='contained' 
                            disableRipple 
                            sx={{
                            width: ' 205px',
                            height: '60px',
                            background: '#FFEA00',
                            borderRadius: '10px',
                            color: '#081F4A',
                            }}
                        >Enroll Now</Button>
                        <Button variant='outlined' disableRipple className='get-btn' sx={{
                            width: '191px',
                            height: '60px',
                            border: '1px solid #FFEA00',
                            borderRadius: '10px',
                            color: '#FFEA00'
                        }}>Get in touch</Button>
                    </Stack>
                </Stack>
                <Stack>
                    <img className='writingImage' src={writingImage} alt="writing" />
                </Stack>
                <Stack>
                    <img className='EllipsesTop' src={EllipsesTop} alt="ellipsesTop" />
                    <img className='EllipsesBtm' src={EllipsesBtm} alt="ellipsesBtm" />
                </Stack>
            </Stack>
        </Box>
    )
}

export default UpcomingSection