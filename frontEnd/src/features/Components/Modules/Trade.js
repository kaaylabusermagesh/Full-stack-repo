import "../styles.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Trade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        fname: "",
        lname: "",
        mobile: "",
        email: "",
        fnameError: false,
        lnameError: false,
        mobileError: false,
        emailError: false,
      },
    };
  }
  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    var formCopy = { ...this.state.form, [name]: value };
    console.log("This is the form copy", formCopy);

    if (formCopy.fname !== "") {
      formCopy.fnameError = false;
    }
    if (formCopy.lname !== "") {
      formCopy.lnameError = false;
    }
    if (formCopy.mobile !== "") {
      formCopy.mobileError = false;
    }
    if (formCopy.email !== "") {
      formCopy.emailError = false;
    }

    this.setState({
      form: formCopy,
    });
  };

  handleClickSave = () => {
    var test = { ...this.state.form };
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
    this.setState({
      form: test,
    });
  };

  componentDidUpdate() {
    console.log("This is the e.target.value", this.state.form);
  }
  render() {
    return (
      <Box className="asset_form_mainbox">
        <Grid className="asset_form_subgrid">
          <Typography>LEARNING ABOUT CLASS COMPONENT</Typography>
        </Grid>
        <Grid className="asset_form_subgrid">
          <Grid>
            <TextField
              label="First Name"
              name="fname"
              value={this.state.form.fname}
              onChange={this.changeHandler}
              error={this.state.form.fnameError}
              helperText={
                this.state.form.fnameError === true
                  ? "First name is required"
                  : ""
              }
            />
          </Grid>
          <Grid className="asset_form_subgridinside">
            <TextField
              label="Last Name"
              name="lname"
              value={this.state.form.lname}
              onChange={this.changeHandler}
              error={this.state.form.lnameError}
              helperText={
                this.state.form.lnameError === true
                  ? "Last name is required"
                  : ""
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
              value={this.state.form.mobile}
              onChange={this.changeHandler}
              error={this.state.form.mobileError}
              helperText={
                this.state.form.mobileError === true ? "Mobile is required" : ""
              }
            />
          </Grid>
          <Grid className="asset_form_subgridinside">
            <TextField
              label="Email"
              type="email"
              name="email"
              value={this.state.form.email}
              onChange={this.changeHandler}
              error={this.state.form.emailError}
              helperText={
                this.state.form.emailError === true ? "Email is required" : ""
              }
            />
          </Grid>
        </Grid>

        <Grid className="asset_form_button_grid">
          <Grid>
            <Button variant="outlined">Cancel</Button>
          </Grid>
          <Grid className="asset_form_savebutton_grid">
            <Button variant="contained" onClick={this.handleClickSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
