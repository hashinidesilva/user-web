import { useEffect, useState } from 'react';

import axios from 'axios';
import Table from '../UI/Table';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:8080/user/v1/me');
    const data = await response.data;
    setUsers(data);
  }, []);

  const columns = [
    { field: 'username', headerName: 'User Name', flex: 1 },
    { field: 'firstName', headerName: 'First Name', width: '350' },
    { field: 'lastName', headerName: 'Last Name', width: '350' },
    { field: 'address', headerName: 'Address', width: '400' },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Contact Number', flex: 1 },
  ];

  return (
    <>
      <Table columns={columns} rows={users}/>
    </>
  );
};

export default UsersTable;

