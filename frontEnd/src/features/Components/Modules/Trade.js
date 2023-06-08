import "../styles.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { Component } from "react";

export default class Trade extends Component {
  render() {
    return (
      <Box className="asset_form_mainbox">
        <Grid className="asset_form_subgrid">
          <Typography>LEARNING ABOUT CLASS COMPONENT</Typography>
        </Grid>
        <Grid className="asset_form_subgrid">
          <Grid>
            <TextField label="First Name" />
          </Grid>
          <Grid className="asset_form_subgridinside">
            <TextField label="Last Name" />
          </Grid>
        </Grid>
        <Grid className="asset_form_subgrid">
          <Grid>
            <TextField label="Mobile" type="number" />
          </Grid>
          <Grid className="asset_form_subgridinside">
            <TextField label="Email" type="email" />
          </Grid>
        </Grid>

        <Grid className="asset_form_button_grid">
          <Grid>
            <Button variant="outlined">Cancel</Button>
          </Grid>
          <Grid className="asset_form_savebutton_grid">
            <Button variant="contained">Save</Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
