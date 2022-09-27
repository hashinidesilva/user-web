import { useNavigate } from "react-router-dom";

import { Box, Paper } from "@mui/material";
import UserForm from "../components/user/UserForm";

const NewUser = () => {
  const navigate = useNavigate();

  const submitHandler = async (patient) => {
    const response = await fetch("http://localhost:8080/medicare/v1/patients", {
      method: 'POST',
      body: JSON.stringify(patient),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const savedPatientId = await response.json();
    navigate(`/patients/${savedPatientId}/prescriptions/create`);
  };

  return (
    <Box sx={{marginTop: "50px", display: "flex", justifyContent: "center"}}>
      <Paper elevation={3} sx={{width: "75%", padding: 2}}>
        <UserForm onAddUser={submitHandler}/>
      </Paper>
    </Box>
  );
};

export default NewUser;
