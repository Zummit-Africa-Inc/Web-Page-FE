import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ClassesCard } from '../components';
import { exampleText2 } from '../pages/example';

const useStyles = makeStyles({
  whyZummit: {
    width: '100%',
    padding: '3.5rem 3rem',
    backgroundColor: 'var(--live-bg)',
  },
})

const AcadWhyZummit = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.whyZummit}>
      <Typography
        variant="h2"
        color="text.primary"
        fontSize={64}
        fontWeight={700}
        my={2}
        textTransform="capitalize"
      >
        Why learn with Zummit Africa?
      </Typography>

      <Typography
        variant="body1"
        fontSize={20}
        fontWeight={400}
        color="text.secondary"
        mt={4}
        mb={12}
      >
        Our Academy is for individuals who would like to take their tech
        knowledge to the next level and make a career change into data science.
      </Typography>
      <Grid container spacing={4}>
        {exampleText2.map((text) => (
          <Grid item key={text.id} xs={12} sm={6} md={4} lg={3}>
            <ClassesCard {...text} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default AcadWhyZummit
