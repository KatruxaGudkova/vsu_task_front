import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          V&K LOGO
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
