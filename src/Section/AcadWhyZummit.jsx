import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ClassesCard } from '../components'
import { exampleText2 } from '../pages/example'

const useStyles = makeStyles({
  whyZummit: {
    width: '100%',
    padding: '10px 40px',
    backgroundColor: 'var(--live-bg)',
  },
})

const AcadWhyZummit = () => {
    const classes = useStyles()

  return (
    <Stack className={classes.whyZummit}>
        <Typography variant='subtitle1' my={2} textTransform='uppercase'>
          What makes us unique
        </Typography>

        <Typography variant='h2' fontWeight={500} my={2} textTransform='capitalize'>
          Why learn with Zummit Africa?
        </Typography>

        <Typography variant='subtitle2' my={2}>
          Our data science course is designed to help you learn-by-doing with live classes taught by an industry expert, making you ready for work as a Data Scientist.
        </Typography>
        <Grid container spacing={4}>
          {exampleText2.map(text => (
            <Grid item key={text.id} xs={12} sm={6} md={4} lg={3}>
              <ClassesCard {...text} />
            </Grid>
          ))}
        </Grid>
      </Stack>
  )
}

export default AcadWhyZummit