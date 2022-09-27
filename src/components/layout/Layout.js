import { Fragment } from 'react';

import NavBar from './NavBar';
import { Box, Toolbar } from '@mui/material';

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar/>
      <Toolbar/>
      <Box component="main" sx={{ flexGrow: 1, margin: '40px' }}>
        {props.children}
      </Box>
    </Fragment>
  );
};

export default Layout;
