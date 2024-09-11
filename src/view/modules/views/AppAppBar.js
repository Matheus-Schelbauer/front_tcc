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
          <Box component="section" 
          sx={{
            p: 2,
            border: '1px solid black',
             backgroundColor: '#f7c94a',
             height: 60,
             width: 140,
             display: 'center',
             justifyContent: 'center',
             alignItems: 'center',
             display: 'flex',
             margin:1
          }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              // href="/premium-themes/onepirate/sign-in/" //colocar a route 
              sx={{color: 'primary.dark' }}
            >
            {'Home'}
            </Link>
          </Box>

          <Box component="section" 
          sx={{
            p: 2,
            border: '1px solid black',
             backgroundColor: '#f7c94a',
             height: 60,
             width: 140,
             display: 'center',
             justifyContent: 'center',
             alignItems: 'center',
             display: 'flex',
             margin:1
          }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="front_tcc/src/view/modules/views/Carteiras" //colocar a route 
              sx={{color: 'primary.dark' }}
            >
            {'Carteiras'}
            </Link>
          </Box>


          <Box component="section" 
          sx={{
            p: 2,
            border: '1px solid black',
             backgroundColor: '#f7c94a',
             height: 60,
             width: 140,
             display: 'center',
             justifyContent: 'center',
             alignItems: 'center',
             display: 'flex',
             margin:1
          }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              fontSize={14}
              align='center'
              // href="/premium-themes/onepirate/sign-in/" //colocar a route 
              sx={{color: 'primary.dark' }}
            >
            {'Gerenciamento de Ativos'}
            </Link>
          </Box>

          <Box component="section" 
          sx={{
            p: 2,
            border: '1px solid black',
             backgroundColor: '#f7c94a',
             height: 60,
             width: 140,
             display: 'center',
             justifyContent: 'center',
             alignItems: 'center',
             display: 'flex',
             margin:1
          }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              fontSize={14}
              align='center'
              // href="/premium-themes/onepirate/sign-in/" //colocar a route 
              sx={{color: 'primary.dark' }}
            >
            {'Análise gráfica'}
            </Link>
          </Box>


          {/* <Box
            sx={{
              width: 80, 
              height: 40, 
              backgroundColor: '#f7c94a',
              display: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid #000000',
            }}
          >
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              // href="/premium-themes/onepirate/sign-in/" //colocar a route da home
              sx={{...rightLink, color: 'primary.dark' }}
            >
            {'Home'}
            </Link>
          </Box>           */}
          {/* <Link
            variant="h6"
            underline="none"
            color="inherit"
            //href="/premium-themes/onepirate/" //coloca o router aqui
            sx={{ fontSize: 24 }}
          >
            {'Proxinvest'}
          </Link> */}
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
