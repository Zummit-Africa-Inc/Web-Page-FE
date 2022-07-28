import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import ReactGa from 'react-ga';

import { Academy, Home } from './pages';
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
