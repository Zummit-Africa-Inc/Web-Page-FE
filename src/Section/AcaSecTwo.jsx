import { Grid, Stack, Typography, Container } from '@mui/material';
import { exampleText } from '../pages/example';
import { Card } from '../components';

function AcaSecTwo() {
  return (
    <Stack
      className="bg-color"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '10px 2px 100px 2px',
        background: 'rgba(255, 255, 255, 0.4)'
      }}
    >
      <Container align="center">
        <Typography
          variant="h2"
          textTransform="capitalize"
          sx={{
            color: '#081F4A',
            fontWeight: '700'
          }}
        >
          Change your life by learning <br /> Data Science
        </Typography>

        <Typography
          variant="subtitle2"
          my={2}
          sx={{
            fontSize: '20px'
          }}
          color="#5B6773"
        >
          Our data science course is designed to help you learn-by-doing with
          live classes <br /> taught by an industry expert, making you ready for
          work as a Data Scientist.
        </Typography>

        <Grid
          container
          spacing={6}
          wrap="wrap"
          sx={{
            justifyContent: 'center',
            padding:'20px'
          }}
        >
          {exampleText.map((text) => (
            <Grid item key={text.id} xs={12} md={4} sm={6}>
              <Card {...text} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
export default AcaSecTwo;
