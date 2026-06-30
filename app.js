//Build Server:
console.log("serwerni boshlash");
const express = require("express");
const app = express();

//MongoDb connect(Har doim 1 bo'lib data basega ulanib, kn Serverni ishga tushirish.)
//MongoDb call (chaqirib olamiz)
const db = require("./server").db();

//1.Entry cod: Middleware sozlamalari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2.Session code
//#.Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4.Routing code
app.post("/create-item", (req, res) => {
  //Mongo:TODO: code with db here:
  console.log("Formadan kelgan data:", req.body);
  res.redirect("/");
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
