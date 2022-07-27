import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 285,
    height: 280,
    backgroundColor: '#C5D7F9',
    padding: '91px 28px',
    borderRadius: '20px'
  }
});

const CurriculumCard = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center'
        }}
        color=" #081F4A"
      >
        {text}
      </Typography>
    </div>
  );
};
export default CurriculumCard;
