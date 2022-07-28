import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import ReactGa from 'react-ga';

import { Academy, Home, Verify } from './pages';
import { PaystackIntegration } from './components';
import { theme } from './theme';
import './App.css';

function App() {
  //Google Analytics
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);

    //To report pageview
    ReactGa.pageview('/App');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/payments" element={<PaystackIntegration />} />
        <Route path="/payments/verify/:ref" element={<Verify />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
