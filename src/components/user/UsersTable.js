import { useEffect, useState } from 'react';

import axios from 'axios';
import Table from '../UI/Table';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await axios.get('http://localhost:8080/user/v1/users');
    const data = await response.data;
    setUsers(data);
  }, []);

  const columns = [
    { field: 'username', headerName: 'User Name', width: '400' },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'contact no', headerName: 'Contact Number', flex: 1 },
  ];

  return (
    <>
      <Table columns={columns} rows={users}/>
    </>
  );
};

export default UsersTable;

