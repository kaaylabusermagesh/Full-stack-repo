import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Grid } from "@mui/material";
import AssetsForm from "./AssetForm";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function AssetTable() {
  const [rows, setRows] = React.useState([]);
  const [assetBool, setAssetBool] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    axios.get("http://localhost:8081/getdashboardform").then((res) => {
      setRows(res.data);
    });
  }, []);

  const handleClickEditForm = (e, i, val) => {
    setAssetBool(true);
    navigate("/assetsform", { state: { name: val } });
  };
  const handleClickNewForm = () => {
    setAssetBool(true);
    navigate("/assetsform");
  };
  const handleClickDeleteForm = (e, i, row) => {
    axios.delete(`http://localhost:8081/deletedashboard/${row.id}`).then(() => {
      console.log("Deleted successfully");
      alert("Record has been deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, "1000");
    });
  };
  return (
    <Box>
      {assetBool === false ? (
        <Box>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              margin: "10px 0px 10px 10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={handleClickNewForm}
            >
              Create New
            </Button>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Avatar</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Name&nbsp;</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Code&nbsp;</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price&nbsp;</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Percentage&nbsp;
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Update&nbsp;/Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow>
                    <TableCell>{row.avatar}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.code}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.percentage}</TableCell>
                    <TableCell align="end">
                      <EditIcon
                        onClick={(e) => handleClickEditForm(e, i, row)}
                        sx={{ cursor: "pointer" }}
                      />
                      <DeleteIcon
                        onClick={(e) => handleClickDeleteForm(e, i, row)}
                        sx={{ cursor: "pointer", marginLeft: "20px" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <AssetsForm />
      )}
    </Box>
  );
}

export default AssetTable;
