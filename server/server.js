var cors = require("cors");
const mysql = require("mysql");
const express = require("express");
//Initialize the express.
const app = express();
app.use(cors());
app.use(express.json());

//Connecting to Database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "dashboardsystem",
});

//Sample get API for learning purpose
app.get("/", (req, res) => {
  const sql = "SELECT * FROM dashboard";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Messgae: "Error inside server" });
    return res.json(result);
  });
});

//Sample create API for learning purpose
app.post("/create", (req, res) => {
  const price = req.body.price;
  const percentage = req.body.percentage;
  const totalPercentage = req.body.totalPercentage;
  //Inserting data to database
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

// dashboard Create API
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
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//dashboard get API
app.get("/getdashboardform", (req, res) => {
  const sql = "SELECT * FROM dashboardform";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Messgae: "Error inside server" });
    return res.json(result);
  });
});

//dashboard update API
app.put("/updatedashboard", (req, res) => {
  db.query(
    "UPDATE dashboardform SET name=?,code=?,price=?,percentage=? WHERE id=?",
    [
      req.body.name,
      req.body.code,
      req.body.price,
      req.body.percentage,
      req.body.id,
    ],
    (err, result) => {
      if (err) return res.json(err);
      return res.json(result);
    }
  );
});

// dashboard delete API
app.delete("/deletedashboard/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM dashboardform WHERE id=?", id, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//creating or listening a server
app.listen(8081, () => {
  console.log("The sever is listening");
});
