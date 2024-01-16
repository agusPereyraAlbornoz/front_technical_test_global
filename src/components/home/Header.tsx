import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background:'orange' }}>
        <Toolbar>
            <img src="/GlobalThink-LogoBlanco.png" alt="Logo" style={{ width: '80px', marginRight: '10px' }}/>
            <Typography variant="h6" noWrap component="div">
                Technical Test Full-Stack - Agustin Pereyra Albornoz
            </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Header;