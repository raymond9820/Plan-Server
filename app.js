//Build Server:
console.log("serwerni boshlash");
const express = require("express");
const app = express();

// db object mongodb call
const db = require("./server").db();
const mongodb = require("mongodb");

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

//button delete database and backend AIP
app.post("/delete-item", (req, res) => {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

//edit database and backend AIP
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

//new API dellete All frontend
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany({}, function (err, data) {
      res.json({ state: "deleted all plans" });
    });
  }
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
