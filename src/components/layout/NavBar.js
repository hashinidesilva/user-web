import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#005cb2"}}>
      <Toolbar>
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: 42,
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          }}
        >
          User API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
