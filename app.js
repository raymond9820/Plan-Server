//Build Server:
console.log("serwerni boshlash");
const express = require("express");
const app = express();

// db object
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
  console.log("Formdan kelgan data:", req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

//data so'raganda ekranga chiqarish.
app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        //bu object bundan reja htmlda foydalnamiz:
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
