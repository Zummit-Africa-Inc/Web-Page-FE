import { Box, Grid, Stack, Typography } from '@mui/material'
import { TestimonialCard } from '../components'
import { testimonialText1, testimonialText2, testimonialText3, testimonialText4, testimonialText5 } from '../pages/example'
import '../CSS/testimonial.css'

const Testimonials = () => {
    return (

        <Stack>
            <Stack className='testimonial-section'>
                <Typography
                    variant='h6'
                    component='h2'
                    sx={{
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        color: '#081F4A',
                        fontSize: '1rem',
                        lineHeight: '24px',
                        textTransform: 'uppercase'
                    }}
                >
                    Testimonials
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: '3rem',
                        color: '#081F4A',
                    }}
                    gutterBottom
                >
                    What Our Interns have Said
                </Typography>
                <Box sx={{marginTop: '2rem'}}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }} spacing={4}>
                        <Grid container item sx={{ width: '400px' }}>
                            <Grid item>
                                <TestimonialCard name={testimonialText1.name} title={testimonialText1.title} text={testimonialText1.text} />
                            </Grid>
                        </Grid>
                        <Grid container item sx={{ width: '400px' }}>
                            <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                <TestimonialCard name={testimonialText2.name} title={testimonialText2.title} text={testimonialText2.text} />


                                <TestimonialCard name={testimonialText3.name} title={testimonialText3.title} text={testimonialText3.text} />

                            </Grid>
                        </Grid>
                        <Grid container item sx={{ width: '400px' }}>

                            <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                <TestimonialCard name={testimonialText4.name} title={testimonialText4.title} text={testimonialText4.text} />

                                <TestimonialCard name={testimonialText5.name} title={testimonialText5.title} text={testimonialText5.text} />

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </Stack>
        </Stack>

    )
}

export default Testimonials