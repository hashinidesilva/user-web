import { useNavigate } from "react-router-dom";

import { Box, Paper } from "@mui/material";
import UserForm from "../components/user/UserForm";

const NewUser = () => {
  const navigate = useNavigate();

  const submitHandler = async (patient) => {
    await fetch("http://localhost:8080/user/v1/me", {
      method: 'POST',
      body: JSON.stringify(patient),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate(-1);
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
