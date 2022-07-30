import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import '../CSS/academyHeroBody.css';

import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)`
  background-color: '#FFEA00';
  color: #fff;
  &:hover {
    background-color: #b9aa04;
  }
  &:focus {
    background-color: #6e6500;
  }
`;

const StyledButton2 = styled(Button)`
  color: #ffea00;
  &:hover {
    border-color: #b9aa04;
    color: #b9aa04;
  }
  &:focus {
    border-color: #6e6500;
    color: #6e6500;
  }
`;

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
                Become a <br /> professional Data <br /> Scientist in 6 weeks
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
                Learn to use your coding knowledge to master a new trade. Have
                your projects reviewed by our expert instructors.
                <br /> Learn how to build AI-powered solutions, and develop the
                necessary knowledge to get hired as a junior Data Scientist.
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
                    <StyledButton
                      href="/payments"
                      variant="contained"
                      sx={{
                        backgroundColor: '#FFEA00',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        color: '#000',
                        fontSize: '20px',
                        boxShadow: '1px 2px 32px -3px rgba(0,0,0,0.75)',
                        textTransform: 'capitalize',
                        fontWeight: 500
                      }}
                    >
                      Enroll Now
                    </StyledButton>
                  </Grid>
                  <Grid item>
                    <StyledButton2
                      variant="outlined"
                      sx={{
                        borderColor: '#081F4A',
                        borderRadius: '10px',
                        color: '#081F4A',
                        padding: '10px 20px',
                        fontSize: '20px',
                        textTransform: 'capitalize',
                        fontWeight: 500
                      }}
                    >
                      Learn More
                    </StyledButton2>
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
                Become a professional Data Scientist in 6 weeks
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
                Learn to use your coding knowledge to master a new trade. Have
                your projects reviewed by our expert instructors. Learn how to
                build AI-powered solutions, and develop the necessary knowledge
                to get hired as a junior Data Scientist.
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
                  <Button
                    href="/payments"
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#FFEA00',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      color: '#000',
                      boxShadow: '1px 2px 32px -3px rgba(0,0,0,0.75)',
                      textTransform: 'capitalize',
                      fontWeight: 500
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
                      padding: '10px 20px',
                      textTransform: 'capitalize',
                      fontWeight: 500
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
