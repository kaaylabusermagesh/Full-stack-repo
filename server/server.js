import express from "express";
import mysql from "mysql";
import cors from "cors";

//Initialize the express.
const app = express();
app.use(cors());

//creating or listening a server
app.listen(8081, () => {
  console.log("The sever is listening");
});
