import React from 'react';
import '../CSS/herobody.css';
import aiStyle from '../Images/Vector 7.png';
import Button from '../Component/ButtonComponent';
import HeroImage from '../Images/Heroimage.png'
import { useMediaQuery, useTheme } from '@mui/material';

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
                <span className="hero_span_md">
                  <img style={{ width: '50px' }} src={aiStyle} alt="ai Style" />
                </span>
              </h1>
              <p style={{ padding: '30px 0' }}>
                Lets give your business a head start!
              </p>
            <div className="hero-cta-btns">
              <Button
                size="small"
                spacing={{ marginRight: '1rem' }}
                variant="contained"
              >
                <span style={{ color: 'black' }}>Request a Demo</span>
              </Button>

              <Button size="small" variant="outlined">
                Experiment A.I
              </Button>
            </div>
            </div>
            
              
          </div>
        </div>
      ) : (
        <div className="hero">
         
            <div className="hero-text">
              <h1 style={{ fontSize: '50px' }}>
                Tell Us The Problem <br /> We'll solve it with
                <span style={{ color: 'yellow' }}>&nbsp;A.I</span>
                <span className="hero_span">
                  <img src={aiStyle} alt="ai Style" />
                </span>
              </h1>
              <p style={{ padding: '30px 0' }}>
                Lets give your business a head start!
              </p>

              <Button spacing={{ marginRight: '2rem' }} variant="contained">
                <span style={{ color: 'black' }}>Request a Demo</span>
              </Button>

              <Button variant="outlined">Experiment A.I</Button>
            </div>
            <div className="hero_image">
            <img src={HeroImage} className="hero_img rotate"/>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroBody;
