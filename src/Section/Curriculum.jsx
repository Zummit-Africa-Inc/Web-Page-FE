import React from 'react';
import { Grid, Stack, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { exampleText3 } from '../pages/example';
import CurriculumCard from '../components/CurriculumCard';

// Logo imports
import numpyLogo from '../Images/numpyLogo.png';
import plotlyLogo from '../Images/plotlyLogo.jpg';
import pandasLogo from '../Images/pandasLogo.jpg';
import pythonLogo from '../Images/pythonLogo.png';
import mplibLogo from '../Images/matplotlibLogo.jpg';
import gitLogo from '../Images/gitLogo.jpg';
import seabornLogo from '../Images/seabornLogo.jpg';

const useStyles = makeStyles({
  curriculum: {
    width: '100%',
    padding: '10px 40px',
    backgroundColor: '#081F4A',
    display: 'flex',
    justifyContent: 'center'
  },
});

const Curriculum = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.curriculum}>
      <Typography
        variant="h2"
        fontWeight={700}
        mt={7}
        mb={5}
        textTransform="capitalize"
        color="#ECF2FD"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        What you would learn
      </Typography>

      <Container>
        <Grid
          container
          my={2}
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {exampleText3.map((text) => (
            <Grid container item key={text.id} xs={12} sm={6} md={4} lg={3} sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <CurriculumCard {...text} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Typography
        variant="subtitle1"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: '#ECF2FD',
          textAlign: 'center'
        }}
        my={8}
      >
        Master industry-standard tools, frameworks and libraries used in
        thousands of <br /> companies around the world.
      </Typography>

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '80%',
          margin: 'auto'
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center'
          }}
        >
          <Grid
            sx={{
              alignSelf: 'center'
            }}
            component="img"
            src={numpyLogo}
          />
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              '@media screen and (max-width: 800px)': {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }
            }}
          >
            <Grid
              sx={{
                borderRadius: '5px',
                alignSelf: 'center'
              }}
              component="img"
              my={2}
              src={plotlyLogo}
            />
            <Grid
              sx={{
                borderRadius: '5px',
                alignSelf: 'center'
              }}
              mb={2}
              component="img"
              src={pandasLogo}
            />
          </Grid>
        </Stack>

        <Grid
          sx={{
            alignSelf: 'center',
          }}
          component="img"
          src={pythonLogo}
        />

        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
          my={2}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              '@media screen and (max-width: 800px)': {
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }
            }}
          >
            <Grid
              sx={{
                borderRadius: '5px',
                alignSelf: 'center',
              }}
             
              component="img"
              src={mplibLogo}
            />
            <Grid
              sx={{
                borderRadius: '5px',
                alignSelf: 'center',
              }}
              my={2}
              component="img"
              src={seabornLogo}
            />
          </Grid>
          <Grid
            sx={{
              alignSelf: 'center',
              borderRadius: '5px'
            }}
            mb={10}
            component="img"
            src={gitLogo}
          />
        </Stack>
      </Grid>
    </Stack>
  );
};
export default Curriculum;
