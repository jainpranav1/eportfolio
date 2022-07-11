const express = require("express");
const myModule = require("./gData.js");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { gData: myModule.gData });
});

app.listen(5000);
