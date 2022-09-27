import { Link } from 'react-router-dom';

import { Button, Grid, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UsersTable from '../components/user/UsersTable';

const Users = () => {

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#0003b2' }}
            size="large"
            startIcon={<AddIcon/>}
            component={Link}
            to="/users/create"
          >
            Add User
          </Button>
        </Grid>
        <Grid item>
          <UsersTable/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Users;
