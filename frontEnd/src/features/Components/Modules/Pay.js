import "../styles.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const initialState = {
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  fnameError: false,
  lnameError: false,
  mobileError: false,
  emailError: false,
};

export default function Pay() {
  const [values, setValues] = useState(initialState);

  const handleChangeField = (e) => {
    const { name, value } = e.target;
    // setValues({ ...values, [name]: value });

    var test = { ...values, [name]: value };
    console.log("This is console for test", test);
    if (test.fname !== "") {
      test.fnameError = false;
    }
    if (test.lname !== "") {
      test.lnameError = false;
    }
    if (test.mobile !== "") {
      test.mobileError = false;
    }
    if (test.email !== "") {
      test.emailError = false;
    }
    setValues(test);
  };

  const handleClickSave = (e) => {
    var test = { ...values };
    console.log("This is the test console", test);
    if (test.fname === "") {
      test.fnameError = true;
    } else {
      test.fnameError = false;
    }
    if (test.lname === "") {
      test.lnameError = true;
    } else {
      test.lnameError = false;
    }
    if (test.mobile === "") {
      test.mobileError = true;
    } else {
      test.mobileError = false;
    }
    if (test.email === "") {
      test.emailError = true;
    } else {
      test.emailError = false;
    }
    setValues(test);
  };

  return (
    <Box className="asset_form_mainbox">
      <Grid className="asset_form_subgrid">
        <Typography>State handling</Typography>
      </Grid>
      <Grid className="asset_form_subgrid">
        <Grid>
          <TextField
            label="First Name"
            name="fname"
            value={values.fname}
            onChange={(e) => handleChangeField(e)}
            error={values.fnameError}
            helperText={
              values.fnameError === true ? "First Name is required" : ""
            }
          />
        </Grid>
        <Grid className="asset_form_subgridinside">
          <TextField
            label="Last Name"
            name="lname"
            value={values.lname}
            onChange={(e) => handleChangeField(e)}
            error={values.lnameError}
            helperText={
              values.lnameError === true ? "Last Name is required" : ""
            }
          />
        </Grid>
      </Grid>
      <Grid className="asset_form_subgrid">
        <Grid>
          <TextField
            label="Mobile"
            type="number"
            name="mobile"
            value={values.mobile}
            onChange={(e) => handleChangeField(e)}
            error={values.mobileError}
            helperText={values.mobileError === true ? "Mobile is required" : ""}
          />
        </Grid>
        <Grid className="asset_form_subgridinside">
          <TextField
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChangeField(e)}
            error={values.emailError}
            helperText={values.emailError === true ? "Email is required" : ""}
          />
        </Grid>
      </Grid>

      <Grid className="asset_form_button_grid">
        <Grid>
          <Button variant="outlined">Cancel</Button>
        </Grid>
        <Grid className="asset_form_savebutton_grid">
          <Button variant="contained" onClick={handleClickSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
