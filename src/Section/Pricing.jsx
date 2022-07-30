import { Grid, Stack, Typography, Button } from '@mui/material';
import React from 'react';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  pricing: {
    width: '100%',
    padding: '30px 20px 80px',
    backgroundColor: '#081F4A',
    display: 'flex',
    justifyContent: 'center'
  }
});

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

const Priciing = () => {
  const classes = useStyles();

  return (
    <Stack className={classes.pricing}>
      <Grid
        sx={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column'
        }}
      >
        {/* <Typography
          variant="subtitle1"
          textTransform="uppercase"
          my={4}
          sx={{
            alignSelf: 'center'
          }}
          color="#ECF2FD"
        >
          Pricing
        </Typography> */}
        <Typography
          variant="h3"
          textTransform="capitalize"
          mb={4}
          sx={{
            alignSelf: 'center',
            color: '#ECF2FD',
            fontWeight: '700',
          }}
        >
          Course Fee
        </Typography>
        <Grid
          sx={{
            alignSelf: 'center'
          }}
        >
          <Grid
            sx={{
              background: '#E8EEF7',
              width: '350px',
              padding: '30px',
              borderRadius: '20px 20px 0px 0px'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textDecorationLine: 'line-through',
                fontWeight: '500',
                fontSize: '22px',
                color: 'rgba(8, 31, 74, 0.348)',
                fontStyle: 'italic'
              }}
            >
              $200
            </Typography>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#081f4a',
                  fontWeight: '700',
                  fontSize: '40px',
                  fontStyle: 'italic',
                  marginRight: '10px'
                }}
              >
                $100
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(8, 31, 74, 0.9)',
                  fontWeight: '700',
                  fontStyle: 'italic',
                  fontSize: '22px'
                }}
              >
                (₦60,000)
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              background: '#FFFCD9',
              width: '350px',
              borderRadius: '0px 0px 20px 20px',
              padding: '30px 45px 30px 45px'
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                600+ hours of coursework
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                4 real-world portfolio projects
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                24 weeks part-time program
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                Mentorship with Industry experts
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                12 months career assistance
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                12 months career assistance
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  marginRight: '15px',
                  color: '#77C900',
                  fontSize: '20px'
                }}
              />
              <Typography variant="subtitle1" color="#081F4A" fontWeight={400}>
                14 days money back guarantee
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          my={2}
          sx={{
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'space-between',
            width: '350px',
            paddingTop: '10px'
          }}
        >
          <StyledButton
            textTransform="uppercase"
            variant="contained"
            sx={{
              background: '#FFEA00',
              width: '150px',
              height: '50px',
              // padding: '6px 12px',
              color: "var(--color-primary)",
            }}
          >
            Enroll Now
          </StyledButton>
          <StyledButton2
            textTransform="uppercase"
            variant="outlined"
            sx={{
              borderColor: '#FFEA00',
              color: '#FFEA00',
              width: '150px',
              height: '50px'
            }}
          >
            Get in touch
          </StyledButton2>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Priciing;
