import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles.css";
import axios from "axios";

function Assets() {
  const [avatar, setAvatar] = useState("");
  const [avatarColor, setAvatarColor] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [percentage, setPercentage] = useState("");
  const [percentageError, setPercentageError] = useState(false);
  const [percentageColor, setPercentageColor] = useState("");
  const [percentageBg, setPercentageBg] = useState("");
  const handleClickCancelForm = () => {
    console.log("This is form for cancel");
    setAvatar("");
    setAvatarColor("");
    setName("");
    setCode("");
    setPrice("");
    setPercentage("");
    setPercentageColor("");
    setPercentageBg("");
  };
  const handleClickSaveForm = () => {
    console.log("This is form for save");
    if (price === "" || code === "" || percentage === "" || name === "") {
      setNameError(true);
      setPriceError(true);
      setCodeError(true);
      setPercentageError(true);
    } else {
      axios
        .post("http://localhost:8081/createdashboard", {
          avatar: avatar,
          avatarcolor: avatarColor,
          name: name,
          code: parseInt(code),
          price: parseInt(price),
          percentage: parseInt(percentage),
          percentagecolor: percentageColor,
          percentagebg: percentageBg,
        })
        .then((res) => {
          console.log("Success saved dashboard form", res);
          if (res.statusText === "OK") {
            setAvatar("");
            setAvatarColor("");
            setName("");
            setCode("");
            setPrice("");
            setPercentage("");
            setPercentageColor("");
            setPercentageBg("");
            alert("Saved Successfully");
          }
        })
        .catch((err) => console.log("error", err));
    }
  };
  const handleChangeTextfield = (e, val) => {
    switch (val) {
      case "avatar":
        setAvatar(e.target.value);
        break;
      case "avatarcolor":
        setAvatarColor(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "code":
        setCode(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "percentage":
        setPercentage(e.target.value);
        break;
      case "percentagecolor":
        setPercentageColor(e.target.value);
        break;
      case "percentagebg":
        setPercentageBg(e.target.value);
        break;
      default:
        console.log("This is switch");
    }
  };

  useEffect(() => {
    console.log("This is avatar", name);
  });
  return (
    <Box className="asset_form_mainbox">
      <Grid className="asset_form_subgrid">
        <Typography>Asset Form</Typography>
      </Grid>
      <Grid className="asset_form_subgrid">
        <Grid>
          <TextField
            label="Avatar"
            onChange={(e) => {
              handleChangeTextfield(e, "avatar");
            }}
            inputProps={{ maxLength: 1 }}
            type="text"
            value={avatar}
          />
        </Grid>
        <Grid className="asset_form_subgridinside">
          <TextField
            label="Avatar Color"
            onChange={(e) => {
              handleChangeTextfield(e, "avatarcolor");
            }}
            value={avatarColor}
          />
        </Grid>
      </Grid>
      <Grid className="asset_form_subgrid">
        <Grid>
          <TextField
            label="Name"
            onChange={(e) => {
              handleChangeTextfield(e, "name");
            }}
            value={name}
            error={nameError}
            helperText={nameError === true ? "Name is required" : ""}
          />
        </Grid>
        <Grid className="asset_form_subgridinside">
          <TextField
            label="Code"
            type="number"
            onChange={(e) => {
              handleChangeTextfield(e, "code");
            }}
            value={code}
            error={codeError}
            helperText={codeError === true ? "Code is required" : ""}
          />
        </Grid>
      </Grid>
      <Grid className="asset_form_subgrid">
        <Grid>
          <TextField
            label="Price"
            type="number"
            onChange={(e) => {
              handleChangeTextfield(e, "price");
            }}
            value={price}
            error={priceError}
            helperText={priceError === true ? "Price is required" : ""}
          />
        </Grid>
        <Grid className="asset_form_subgridinside">
          <TextField
            label="Percentage"
            type="number"
            onChange={(e) => {
              handleChangeTextfield(e, "percentage");
            }}
            value={percentage}
            error={percentageError}
            helperText={
              percentageError === true ? "Percentage is required" : ""
            }
          />
        </Grid>
      </Grid>
      <Grid className="asset_form_subgrid">
        <Grid>
          <TextField
            label="Percentage Color"
            onChange={(e) => {
              handleChangeTextfield(e, "percentagecolor");
            }}
            value={percentageColor}
          />
        </Grid>
        <Grid className="asset_form_subgridinside">
          <TextField
            label="Percentage Bg"
            onChange={(e) => {
              handleChangeTextfield(e, "percentagebg");
            }}
            value={percentageBg}
          />
        </Grid>
      </Grid>
      <Grid className="asset_form_button_grid">
        <Grid>
          <Button onClick={handleClickCancelForm} variant="outlined">
            Cancel
          </Button>
        </Grid>
        <Grid className="asset_form_savebutton_grid">
          <Button onClick={handleClickSaveForm} variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Assets;
