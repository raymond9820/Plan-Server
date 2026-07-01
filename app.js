//Build Server:
console.log("serwerni boshlash");
const express = require("express");
const app = express();

//MongoDb connect(Har doim 1 bo'lib data basega ulanib, kn Serverni ishga tushirish.)
//MongoDb call (chaqirib olamiz)
// db object bunday davomiy foydalanamiz:
const db = require("./server").db();

//1.Entry cod: Middleware sozlamalari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2.Session code
//#.Views code
app.set("views", "views");
app.set("view engine", "ejs");

/*4.Routing code
app.post malumot qo'shish va qabul qilib olish
  1.formdan kelgan datani data basega save qilamiz
   2.bu reja objectni to'liq htmld ishlatamiz 
   3.Xulosa: HTML'dagi name="..." nima bo'lsa, backend'da req.body... ham aynan o'shanday yozilishi shart.*/
app.post("/create-item", (req, res) => {
  console.log("Formdan kelgan data:", req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
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
