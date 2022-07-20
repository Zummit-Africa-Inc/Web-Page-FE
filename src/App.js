import React, { useEffect } from 'react';
import './App.css';
import ReactGa from 'react-ga';
import { Routes, Route } from 'react-router-dom';

import { Academy, Home } from './pages';

function App() {
  //Google Analytics
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_TRACKING_ID);

    //To report pageview
    ReactGa.pageview('/App');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
      </Routes>
    </>
  );
}

export default App;
