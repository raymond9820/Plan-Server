console.log("web serverni boshlash");
//1-Bosqich: Kerakli asboblarni olib kelish (Ulanishlar)
const express = require("express");
//bu orqali esa Express’ning barcha imkoniyatlaridan foydalanish uchun restoran binosini (appni) qurib olyapmiz.
const app = express();
//http paketlarini chiqarib oliyabmiz
const http = require("http");

//1: Kirish code
//Middleware: user so‘rovi (request) kodingiz ichiga kirib borishidan oldin, mana shu filtrlar orqali o‘tadi:
app.use(express.static("public"));
//agar user xar xil datalar orqali jonatsa:express uni tushunadigan qilib chiroyli ob'ektga o‘girib beradi.
app.use(express.json());
//user Login yoki Registratsiya formasidan) ma'lumot jo‘natsa, o‘sha ma'lumotlarni xatosiz o‘qib olishga yordam beradi. htmldan formlarni qabul qiladi
app.use(express.urlencoded({ extended: true }));

//2:Session code
//3:Views code dizayn: bsr
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code:ya'ni yo‘l ko‘rsatuvchi

app.get("/", function (req, res) {
  res.end("hello world by Raymond");
});

//serverni quramiz:
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`THe server is running successfully on port: ${PORT}`);
});
