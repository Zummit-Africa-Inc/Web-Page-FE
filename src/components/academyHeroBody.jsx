import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import '../CSS/academyHeroBody.css';

function AcademyHeroBody() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!isMedium ? (
        <main className="academy_hero">
          <div>
            <Container style={{}}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontWeight: '700',
                  color: '#081F4A'
                }}
                gutterBottom
              >
                Learn Data <br /> Science With An <br /> Industry Expert.
              </Typography>
              <Typography
                variant="h6"
                align="center"
                paragraph
                sx={{
                  fontWeight: 400,
                  color: '#5b6773',
                  paddingBottom: '20px'
                }}
              >
                Zummit Africa Academy would take you from zero to hero in Data
                Science as you <br /> gain real life industry experience from an
                industry expert.
              </Typography>
              <div>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    justifyContent: 'center'
                  }}
                >
                  <Grid item>
                    <Button href='/payments'
                      variant="contained"
                      sx={{
                        backgroundColor: '#FFEA00',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        color: '#000',
                        fontSize: '20px'
                      }}
                    >
                      Enroll Now
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#081F4A',
                        borderRadius: '10px',
                        color: '#081F4A',
                        padding: '10px 20px',
                        fontSize: '20px'
                      }}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      ) : (
        <main className="academy_hero_md">
          <div>
            <Container>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  fontWeight: '700',
                  color: '#081F4A',
                  paddingTop: '150px'
                }}
                gutterBottom
              >
                Learn Data Science With An Industry Expert.
              </Typography>
              <Typography
                variant="h6"
                align="center"
                paragraph
                sx={{
                  fontSize: '18px',
                  color: '#5b6773',
                  paddingBottom: '20px'
                }}
              >
                Zummit Africa Academy would take you from zero to hero in Data
                Science as you gain real life industry experience from an
                industry expert.
              </Typography>
            </Container>
            <div>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  paddingBottom: '10%'
                }}
              >
                <Grid item>
                  <Button href='/payments'
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#FFEA00',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      color: '#000'
                    }}
                  >
                    Enroll Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: '#081F4A',
                      borderRadius: '10px',
                      color: '#081F4A',
                      padding: '10px 20px'
                    }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
export default AcademyHeroBody;
