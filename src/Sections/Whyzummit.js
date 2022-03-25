import React from 'react'
import {Box, Grid} from '@mui/material'
import {PrimaryHeader, Header, Paragraph} from '../Components/Typography'
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import Icon from '../Components/Icon';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SaveIcon from '../Images/save-icon.png'

export default function Whyzummit() {
  return (
    <Box component='section' 
        sx={{ py: '4rem', backgroundColor: '#DEE5EE', color: '#081F4A'}}
        px={{xs:3, sm:4, md:'9rem'}}
    >
        <PrimaryHeader pbSize='3rem'>Improve services, save cost and scale</PrimaryHeader>
        <Grid container columnSpacing={6} rowSpacing={5}>
            <Grid item xs={12} sm={6}>
                <Icon><img src={SaveIcon} alt='save cost icon'/></Icon>
                <Header textSize={'h6'}>Save cost</Header>
                <Paragraph>
                    The main purpose of AI for many businesses is largely to reduce operational costs. Save money by automating and optimising operational processes.
                </Paragraph>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Icon><MoreTimeOutlinedIcon /></Icon>
                <Header textSize={'h6'}>Save time</Header>
                <Paragraph>
                    Save your employees time in completing repetitive and routine tasks and Increase efficiency, as AI takes less time to process data than people might.
                </Paragraph>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Icon><SupportAgentIcon /></Icon>
                <Header textSize={'h6'}>Customer service</Header>
                <Paragraph>
                    Our ML can analyze your customer feedback and power automatic brand response and support messages to give super customer support experience.
                </Paragraph>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Icon><FavoriteBorderOutlinedIcon /></Icon>
                <Header textSize={'h6'}>Service delivery</Header>
                <Paragraph>
                    AI drives down the time taken to perform a task. It enables multi-tasking and eases the workload for existing resources and augments the capabilities of differently abled individuals making the process faster and smarter.
                </Paragraph>
            </Grid>
        </Grid>
    </Box>
  )
}
