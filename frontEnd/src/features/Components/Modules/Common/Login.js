import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./common.css";
import Validation from "./loginValidation";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState({});

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    setError(Validation(values));
    console.log("This is the error test", Validation(values));
  };

  const handleClickSignin = () => {
    console.log("This create new user button");
  };

  return (
    <Box className="login_mainbox">
      <Grid className="login_grid">
        <Typography sx={{ fontSize: "36px" }}>Login Form</Typography>
      </Grid>
      <Grid className="login_grid">
        <TextField
          label="Email"
          name="email"
          value={values.email}
          onChange={(e) => handleChangeField(e)}
          error={error.email}
          helperText={error.email}
          sx={{ width: "25%" }}
        />
      </Grid>
      <Grid className="login_grid">
        <TextField
          label="Password"
          name="password"
          value={values.password}
          onChange={(e) => handleChangeField(e)}
          error={error.password}
          helperText={error.password}
          sx={{ width: "25%" }}
          type="password"
        />
      </Grid>
      <Grid className="login_buttongrid">
        <Button
          variant="contained"
          onClick={handleClickLogin}
          sx={{ width: "25%", textTransform: "none", marginTop: "30px" }}
        >
          Login
        </Button>
      </Grid>
      <Grid className="login_typogrid">
        <Typography>Do not have an account?</Typography>
      </Grid>
      <Grid className="login_buttongrid">
        <Button
          variant="contained"
          sx={{
            width: "25%",
            textTransform: "none",
            marginBottom: "84px",
          }}
          onClick={handleClickSignin}
          href="/signup"
        >
          Create an Account
        </Button>
      </Grid>
    </Box>
  );
}

export default Login;
