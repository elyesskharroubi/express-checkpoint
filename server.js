// importing / declaring stuff
const express = require("express");
const app = express();
const PORT = 5000;
const checkDateTime = require("./middleware");
//setting view engine
app.set("view engine", "ejs");

//the middleware time checking thingy
app.use(checkDateTime);

//routing stuff
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

//server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
