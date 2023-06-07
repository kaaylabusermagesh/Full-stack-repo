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

app.post("/createdashboard", (req, res) => {
  const sql =
    "INSERT INTO dashboardform (`avatar`,`avatarcolor`,`name`,`code`,`price`,`percentage`,`percentagecolor`,`percentagebg`) VALUES (?)";
  const values = [
    req.body.avatar,
    req.body.avatarcolor,
    req.body.name,
    req.body.code,
    req.body.price,
    req.body.percentage,
    req.body.percentagecolor,
    req.body.percentagebg,
  ];

  //Sending data to database
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/getdashboardform", (req, res) => {
  const sql = "SELECT * FROM dashboardform";

  db.query(sql, (err, result) => {
    if (err) return res.json({ Messgae: "Error inside server" });
    return res.json(result);
  });
});

//creating or listening a server
app.listen(8081, () => {
  console.log("The sever is listening");
});
