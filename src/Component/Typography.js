import React from 'react';
import { Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

export function PrimaryHeader({ children, pbSize }) {
  // MaterialUI Hook for Breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
  let customFontsize = isMobile ? '2.125rem' : '1.9rem';

  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        textAlign: 'center',
        paddingBottom: pbSize,
        fontWeight: '800',
        fontSize: customFontsize
      }}
    >
      {children}
    </Typography>
  );
}

export function Header({ children, textSize, textAlign }) {
  return (
    <Typography
      variant={textSize}
      component={textSize}
      sx={{ py: '1rem', textAlign: { textAlign } }}
    >
      {children}
    </Typography>
  );
}

export function Paragraph({ children, styled }) {
  return (
    <Typography
      component="p"
      sx={{ lineHeight: '1.7rem', textAlign: `${styled}` }}
    >
      {children}
    </Typography>
  );
}

export function InternsText({ children, styled }) {
  return (
    <Typography
      component="p"
      sx={{
        fontSize: '15px',
        textAlign: `${styled}`,
        display: 'flex',
        paddingBottom: '12px'
      }}
    >
      {children}
    </Typography>
  );
}
