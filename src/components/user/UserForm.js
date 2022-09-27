import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Divider, MenuItem, Stack, TextField, Typography } from '@mui/material';

const UserForm = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      username: username,
      address: address,
      contactNo: contactNo,
    };
    props.onAddUser(newUser);
  };

  return (
    <Box sx={{ border: 1, borderColor: '#1e88e5' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 70,
          justifyContent: 'center',
          backgroundColor: '#1e88e5',
        }}>
        <Typography variant="h4" color="#ffffff">User Form</Typography>
      </Box>
      <Divider/>
      <form onSubmit={submitHandler} style={{ margin: '20px' }}>
        <Stack spacing={4}>
          <TextField
            fullWidth
            id="name"
            label="User name"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            fullWidth
            id="address"
            label="Address"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <TextField
            fullWidth
            id="contact"
            label="Contact number"
            type="number"
            value={contactNo}
            onChange={(event) => setContactNo(event.target.value)}
          />
          <Stack direction="row" spacing={4}>
            <Button
              variant="contained"
              type="submit"
              // disabled={!formIsValid}
              sx={{ backgroundColor: '#0003b2' }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
              sx={{ backgroundColor: '#b25600' }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default UserForm;
