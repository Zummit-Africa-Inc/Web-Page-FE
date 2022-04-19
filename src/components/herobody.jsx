import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import '../CSS/herobody.css';
import aiStyle from '../Images/Vector 7.png';
import Button from '../Component/ButtonComponent';

function HeroBody() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <>
      {isMatch ? (
        <div className="hero_md">
          <div className="hero_image_md">
            <div className="hero-text_md">
              <h1 className="hero_heading_md">
                Tell Us The Problem <br /> We'll solve it with
                <span style={{ color: 'yellow' }}>&nbsp;A.I</span>
                <span className="hero_span">
                  <img style={{ width: '50px' }} src={aiStyle} alt="ai Style" />
                </span>
              </h1>
              <p style={{ paddingBottom: '30px' }}>
                Lets give your business a head start!
              </p>
              
              <Button size="small" spacing={{ marginRight: '1rem' }} variant="contained">
                <a href="#demo" style={{ color: 'black' }} >
                  Request a Demo
                </a>
              </Button>

              <Button size="small" variant="outlined">
              <a href="#ai" >
                  Experiment a.i
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero">
          <div className="hero_image">
            <div className="hero-text">
              <h1 style={{ fontSize: '50px' }}>
                Tell Us The Problem <br /> We'll solve it with
                <span style={{ color: 'yellow' }}>&nbsp;A.I</span>
                <span className="hero_span">
                  <img src={aiStyle} alt="ai Style" />
                </span>
              </h1>
              <p style={{ paddingBottom: '30px' }}>
                Lets give your business a head start!
              </p>

              <Button size="small" spacing={{ marginRight: '1rem' }} variant="contained">
                <a href="#demo" style={{ color: 'black' }} >
                  Request a Demo
                </a>
              </Button>

              <Button size="small" variant="outlined">
              <a href="#ai" >
                  Experiment a.i
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroBody;
