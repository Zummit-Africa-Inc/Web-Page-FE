import React from 'react';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { AcademyHero, AcadWhyZummit, AcaSecTwo, Testimonials } from '../Section';

const useStyles = makeStyles({
  root: {}
});

const Academy = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.root}>
      <AcademyHero />
      <AcaSecTwo />
      <AcadWhyZummit />
      <Testimonials />
    </Stack>
  );
};

export default Academy;
