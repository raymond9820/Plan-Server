console.log("Start webserver");
const { render } = require("ejs");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

const userData = fs.readFileSync("database/userdata.json", "utf-8");
const user = JSON.parse(userData);
//1: Entry code:
//Middleware: Before a user request enters your code, it passes through these filters:
app.use(express.static("public"));
//If the user sends in various data: express will convert it into a beautiful object that it understands.
app.use(express.json());
// html get form:
app.use(express.urlencoded({ extended: true }));

//2:Session code
//3:Views code dizayn: bsrss
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code: Roadmap:
app.post("/create-item", (req, res) => {
  console.log("terminalga kelgan data:", req.body);
  res.redirect("/");
});

app.get("/", function (req, res) {
  res.render("Buysell", { user: user });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

//build Server:
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`THe server is running successfully on port: ${PORT}`);
});
