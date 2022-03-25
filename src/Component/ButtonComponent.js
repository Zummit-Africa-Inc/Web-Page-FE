import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#FFEA00',
    },
  },
});

export default function CustomColor({variant ,spacing ,children}) {
  return (
    <ThemeProvider theme={theme}>
      <Button color="neutral" variant={variant} sx={spacing}>
             { children }
      </Button>
    </ThemeProvider>
  );
}

 

