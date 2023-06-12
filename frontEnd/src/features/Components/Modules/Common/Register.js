import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./common.css";
import Validation from "./signupValidation";

const initialState = {
  name: "",
  email: "",
  password: "",
};
function Register() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <Box className="login_mainbox">
      <Grid className="login_grid">
        <Typography sx={{ fontSize: "36px" }}>Register Form</Typography>
      </Grid>
      <Grid className="login_grid">
        <TextField
          label="Name"
          name="name"
          value={values.name}
          onChange={(e) => handleChangeField(e)}
          error={errors.name}
          helperText={errors.name}
          sx={{ width: "25%" }}
        />
      </Grid>
      <Grid className="login_grid">
        <TextField
          label="Email"
          name="email"
          value={values.email}
          onChange={(e) => handleChangeField(e)}
          error={errors.email}
          helperText={errors.email}
          sx={{ width: "25%" }}
        />
      </Grid>
      <Grid className="login_grid">
        <TextField
          label="Password"
          name="password"
          value={values.password}
          onChange={(e) => handleChangeField(e)}
          error={errors.password}
          helperText={errors.password}
          sx={{ width: "25%" }}
          type="password"
        />
      </Grid>
      <Grid className="login_buttongrid">
        <Button
          variant="contained"
          onClick={handleClickSubmit}
          sx={{
            width: "25%",
            textTransform: "none",
            marginTop: "30px",
            marginBottom: "84px",
          }}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
}

export default Register;
