const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");

let rawdata = fs.readFileSync("gData.json");
let gData = JSON.parse(rawdata);

app.get("/", (req, res) => {
  res.render("index", { gData: gData });
});

app.listen(5000);
