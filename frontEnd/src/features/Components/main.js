import { Grid } from "@mui/material";
import React from "react";
import "./styles.css";
import BodyComponent from "./Modules/body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trade from "./Modules/Trade";
import Pay from "./Modules/Pay";
import Foryou from "./Modules/Foryou";
import Settings from "./Modules/Settings";
import Invitefriends from "./Modules/Invitefriends";
import AssetTable from "./Modules/Asset/AssetTable";
import AssetsForm from "./Modules/Asset/AssetForm";

function Assignment() {
  return (
    <BrowserRouter>
      <Grid className="main_gridfor_body">
        <Routes>
          <Route path="/" element={<BodyComponent />}></Route>
          <Route path="/assets" element={<AssetTable />}></Route>
          <Route path="/trade" element={<Trade />}></Route>
          <Route path="/pay" element={<Pay />}></Route>
          <Route path="/foryou" element={<Foryou />}></Route>
          <Route path="/invite" element={<Invitefriends />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/assetsform" element={<AssetsForm />}></Route>
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default Assignment;
