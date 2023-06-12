import { Avatar, Box, Grid, InputAdornment, TextField } from "@mui/material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ border: "none" }}>
          <TextField
            placeholder="Search"
            sx={{
              m: 1,
              width: "40ch",
              backgroundColor: "#F4F5F7",
              border: "none",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ border: "none" }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid sx={{ margin: "20px 0px 0px 20px" }}>
            <Grid className="header_bg_circle">
              <MessageOutlinedIcon sx={{ color: "#B2B2B2" }} />
            </Grid>
          </Grid>
          <Grid sx={{ margin: "20px 0px 0px 20px" }}>
            <Grid className="header_bg_circle">
              <NotificationsOutlinedIcon sx={{ color: "#B2B2B2" }} />
            </Grid>
          </Grid>
          <Grid sx={{ margin: "15px 5px 0px 20px" }}>
            <Avatar
              sx={{ height: "45px", width: "45px", margin: "7px 0px 0px 0px" }}
            >
              K
            </Avatar>
          </Grid>
          <Grid sx={{ margin: "35px 0px 0px 10px" }}>
            <KeyboardArrowDownOutlinedIcon
              sx={{ color: "#BBBCC0", cursor: "pointer" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ marginTop: "10px" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
