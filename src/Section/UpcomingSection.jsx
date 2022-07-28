import { Button, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import '../CSS/upcomingSection.css'
import writingImage from '../Images/writingImage.png'

const UpcomingSection = () => {
    return (
        <Box className='upcomingSection'>
            <Stack className='box'>
                <Stack className='boxText'>
                    <Typography
                        className='boxHeader'
                        variant='h5'
                        component='span'
                    >
                        Join the upcoming batch
                    </Typography>
                    <Typography className='box-paragraph' variant='p'>
                        The next batch starts September, 2022 and is limited to 100 <br /> participants.
                        Once we receive your application,
                        we‘ll call you to <br /> determine if the program is the right fit for you and discuss how <br /> we can help you achieve your career goals.
                    </Typography>

                    <Stack direction='row' spacing={2} className='buttons'>
                        <Button variant='contained' disableRipple className='enroll-btn'>Enroll Now</Button>
                        <Button variant='outlined' disableRipple className='get-btn'>Get in touch</Button>
                    </Stack>
                </Stack>
                <Stack>
                    <img className='writingImage' src={writingImage} alt="writing" />
                </Stack>
            </Stack>
        </Box>
    )
}

export default UpcomingSection