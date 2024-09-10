import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{height: '80px'}} >
        <Toolbar sx={{ justifyContent: 'space-around', minHeight: '83px !important'}}>
          <Box sx={{ flex: 1 }} />
          <Box sx={{ flex: 1 }}>
            <img
              src="ProxInvestLogo.svg"
              alt="Logo da ProxInvest"
              style={{ height: '120px', width: 'auto' }} 
            />
          </Box>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {'Proxinvest'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={{...rightLink, color: 'primary.dark' }}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'primary.dark' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
