import React from 'react';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  AcademyFooter,
  AcademyHero,
  AcadWhyZummit,
  AcaSecTwo,
  CurriculumSection,
  Pricing,
  Testimonials,
  UpcomingSection
} from '../Section';

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
      <CurriculumSection />
      <Testimonials />
      <Pricing />
      <UpcomingSection />
      <AcademyFooter />
    </Stack>
  );
};

export default Academy;
