import React, { useState } from "react";
import "../styles.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Data from "../data.json";
import Chart from "react-google-charts";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Bodybottom = ({ handleClickShare }) => {
  const [value, setValue] = React.useState(0);
  const [price, setPrice] = useState();
  const [priceError, setPriceError] = useState(false);
  const [change, setChange] = useState();
  const [changeError, setChangeError] = useState(false);
  const [changeHours, setChangeHours] = useState();
  const [changeHoursError, setChangeHoursError] = useState(false);
  const [title, setTitle] = useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const [currentVal, setCurrentVal] = useState();
  const handleOpenModal = (e, val, index) => {
    setOpenModal(true);
    if (val === "buy") {
      setTitle("Buy Modal");
    } else {
      setTitle("Sell Modal");
    }
    setCurrentIndex(index);
    setCurrentVal(val);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setPriceError(false);
    setChangeError(false);
    setChangeHoursError(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [arrayList] = useState(Data.Tabledata);
  const data1 = [
    ["Month", "Binance"],
    ["Jan", 1],
    ["Feb", 3],
    ["Mar", 7],
    ["Apr", 1],
  ];

  const options1 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  const handleChangeTextfield = (e, val) => {
    var target = e.target.value;
    if (val === "price") {
      setPrice(e.target.value);
    }
    if (val === "change") {
      setChange(e.target.value);
    }
    if (val === "changehours") {
      setChangeHours(e.target.value);
    }

    if (target !== "" && val === "price") {
      setPriceError(false);
    }
    if (target !== "" && val === "change") {
      setChangeError(false);
    }
    if (target !== "" && val === "changehours") {
      setChangeHoursError(false);
    }
  };

  return (
    <Box className="bodybottom_mainbox">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Summary" {...a11yProps(0)} className="tab_styles" />
            <Tab label="Table" {...a11yProps(1)} className="tab_styles" />
            <Tab label="Charts" {...a11yProps(2)} className="tab_styles" />
            <Tab label="Reporting" {...a11yProps(3)} className="tab_styles" />
            <Tab label="Analysis" {...a11yProps(4)} className="tab_styles" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {arrayList.map((arr, index) => {
            return (
              <Grid className="main_grid_container" container spacing={1}>
                <Grid item xs={0.5} className="grid_spacing">
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: arr.avatarColor,
                      fontSize: "12px",
                    }}
                  >
                    {arr.avatar}
                  </Avatar>
                </Grid>
                <Grid item xs={1} className="grid_spacing">
                  <Typography sx={{ fontSize: "14px" }}>{arr.abbre}</Typography>
                  <Typography
                    sx={{ fontSize: "14px", color: "gray", fontWeight: "bold" }}
                  >
                    {arr.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  className="grid_spacing"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ fontSize: "14px" }}>Price</Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    {"$" + arr.price}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  className="grid_spacing"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    Change
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "green" }}>
                    {"+" + arr.change + "%"}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1}
                  className="grid_spacing"
                  sx={{ textAlign: "center" }}
                >
                  <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                    24hr Change
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "green" }}>
                    {"+" + arr.changehours + "%"}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="grid_spacing"
                  sx={{ textAlign: "center" }}
                >
                  <Chart
                    chartType="LineChart"
                    width="100%"
                    height="50px"
                    data={data1}
                    options={options1}
                  />
                </Grid>
                <Grid
                  item
                  xs={2}
                  className="grid_spacing"
                  sx={{ textAlign: "end", whiteSpace: "nowrap" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      marginRight: "15px",
                      backgroundColor: "white",
                      color: "black",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "white !important",
                        color: "black !important",
                      },
                    }}
                    onClick={(e) => handleOpenModal(e, "sell", index)}
                  >
                    Sell
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      marginRight: "10px",
                      textTransform: "none",
                    }}
                    onClick={(e) => handleOpenModal(e, "buy", index)}
                  >
                    Buy
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Work under construction
        </TabPanel>
        <TabPanel value={value} index={2}>
          Work under construction
        </TabPanel>
        <TabPanel value={value} index={3}>
          Work under construction
        </TabPanel>
        <TabPanel value={value} index={4}>
          Work under construction
        </TabPanel>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="modal_typography"
          >
            {title}
          </Typography>
          <Grid className="modal_textfield_grid">
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              type="number"
              onChange={(e) => {
                handleChangeTextfield(e, "price");
              }}
              error={priceError}
              helperText={priceError === true ? "Price is reuired" : ""}
            />
          </Grid>
          <Grid className="modal_textfield_grid">
            <TextField
              id="outlined-basic"
              label="Change"
              variant="outlined"
              type="number"
              onChange={(e) => {
                handleChangeTextfield(e, "change");
              }}
              error={changeError}
              helperText={changeError === true ? "Change is reuired" : ""}
            />
          </Grid>
          <Grid className="modal_textfield_grid">
            <TextField
              id="outlined-basic"
              label="Change Hours"
              variant="outlined"
              type="number"
              onChange={(e) => {
                handleChangeTextfield(e, "changehours");
              }}
              error={changeHoursError}
              helperText={
                changeHoursError === true ? "Change Hours is reuired" : ""
              }
            />
          </Grid>
          <Grid className="modal_textfield_grid">
            <Button
              variant="outlined"
              sx={{ textTransform: "none" }}
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "none", marginLeft: "10px" }}
              onClick={(e) =>
                handleClickShare(
                  e,
                  currentVal,
                  currentIndex,
                  price,
                  change,
                  changeHours,
                  setPriceError,
                  setChangeError,
                  setChangeHoursError,
                  setOpenModal
                )
              }
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Bodybottom;
