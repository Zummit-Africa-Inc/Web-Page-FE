import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Logo from '../Images/acaLogo.png';

function AcademyHeader() {
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            background: '#f9f8f8',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <img src={Logo} className="navbar_image" alt="" />
          <Box sx={{ display: 'flex', marginRight: '2.9rem' }}>
            <Button
              sx={{
                color: '#081F4A',
                padding: '10px',
                fontSize: '15px',
                marginRight: '25px'
              }}
            >
              LEARN MORE
            </Button>
            <Button
              href="/payments"
              variation="h6"
              sx={{
                color: '#081F4A',
                backgroundColor: '#FFEA00',
                padding: '10px',
                fontSize: '15px'
              }}
            >
              ENROLL NOW
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default AcademyHeader;
