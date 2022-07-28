import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import image from '../Images/testimonial.png'
import '../CSS/testimonial.css'

const TestimonialCard = ({ name, title, text }) => {
    return (
        <Card sx={{
            width: '300px',
            background: 'rgba(255, 255, 255, 0.5)',
            boxShadow: '0px 2px 12px rgba(8, 31, 74, 0.25)',
            borderRadius: '10px'
        }}
        >
            <CardHeader
                avatar={<img src={image} alt='intern' />}
                title={<span className='name'>{name}</span>}
                subheader={<span className='title'>{title}</span>}
            />
            <CardContent>
                <Typography sx={{
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#081F4A'}} 
                    variant="body2"
                >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard