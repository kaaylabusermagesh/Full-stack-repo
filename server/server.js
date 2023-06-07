const express = require("express");
const mysql = require("mysql");
//Initialize the express.
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

//Connecting to Database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "dashboardsystem",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM dashboard";

  db.query(sql, (err, result) => {
    if (err) return res.json({ Messgae: "Error inside server" });
    return res.json(result);
  });
});

app.post("/create", (req, res) => {
  const price = req.body.price;
  const percentage = req.body.percentage;
  const totalPercentage = req.body.totalPercentage;

  //Sending data to database
  db.query(
    "INSERT INTO dashboard (`price`,`change`,`changehours`) VALUES (?,?,?)",
    [price, percentage, totalPercentage],
    (err, result) => {
      if (err) {
        console.log(err, "This is post error");
      } else {
        res.send("Inserted Successfully");
      }
    }
  );
});

//creating or listening a server
app.listen(8081, () => {
  console.log("The sever is listening");
});
