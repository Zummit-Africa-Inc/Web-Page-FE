import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';

import Logo from '../Images/LOGO (1).png';
import Btx from '../Component/ButtonComponent';
import DrawerComponent from '../Component/DrawerComponent';

const Header = () => {
  const PAGES = ['about', 'services', 'contact'];
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{ backgroundColor: '#081F4A' }}>
          <img className="navbar_image" src={Logo} alt="Logo" />
          {isMatch ? (
            <Box sx={{ marginLeft: 'auto' }}>
              {' '}
              <DrawerComponent />{' '}
            </Box>
          ) : (
            <Tabs
              sx={{ marginLeft: 'auto' }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="primary">
              {PAGES.map((page, index) => (
                <Tab 
                key={index} 
                sx={{ textTransform: 'capitalize', marginLeft: '50px' }} 
                label={page} href={`#${page}`} />
              ))}
              <Btx spacing={{ marginLeft: '100px' }} variant="outlined">
                <span style={{ color: 'white', textTransform: 'capitalize' }}>
                  <a href="/academy">Academy</a>
                </span>
              </Btx>
              <Btx spacing={{ marginLeft: '100px' }} variant="outlined">
                <span style={{ color: 'white', textTransform: 'capitalize' }}>
                  <a href="#demo">Request a demo</a>
                </span>
              </Btx>
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
