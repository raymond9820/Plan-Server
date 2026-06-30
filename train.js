/*Callback Hell sinxron functions and event loop ))  */

console.log("Jack Ma says:");
const list = [
  "1 Be a good student", //0-20
  "2 Choose the right boss and make more mistakes", //20-30
  "3 Start working for yourself", //30-40
  "4 Do what you are strong at", //40-50
  "5 Inspire young people", //50-60
  "6 Now relax, because it's useless", // 60 over
];

/* call --> 
function maslahatBering(a, Callback) {
  if (typeof a !== "number") Callback("insert a number", null);
  else if (a <= 20) Callback(null, list[0]);
  else if (a > 20 && a <= 30) Callback(null, list[1]);
  else if (a > 30 && a <= 40) Callback(null, list[2]);
  else if (a > 40 && a <= 50) Callback(null, list[3]);
  else if (a > 50 && a <= 60) Callback(null, list[4]);
  else {
    setTimeout(function () {
      Callback(null, list[5]);
    }, 5000);
  }
}

 this define sector --->

maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("Javob:", data);
  }
});*/

/* plan: 
asynchronous coding
asynchronous funtions
promise funtions
callback vs asynchronous vs promise 
//async function Define --->
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number", null);
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      });
    });
  }
} */

// async function call via then/catch --->
/* 
maslahatBering(60)
  .then((data) => {
    console.log("javob:", data);
  })

  .catch((err) => {
    console.log("ERROR", err);
  });
 

//call -> asyns/await  (maydoncha) call --->
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run(); */

/* Asynchronous funtion > Callback | Async | Promise 

 DEFINE                      CALL

 callback        >          callback
 async/await     >          then/catch || async/await 
 promise.         >          then/catch || async/await 
*/

// Define || promise
function advice(age) {
  return new Promise((resolve, reject) => {
    if (typeof age !== "number") reject("should be number");
    else if (age > 60) resolve(list[5]);
    else if (age > 50) resolve(list[4]);
    else if (age > 40) resolve(list[3]);
    else if (age > 30) resolve(list[2]);
    else if (age > 20) resolve(list[1]);
    else {
      setTimeout(() => {
        resolve(list[1]);
      }, 3000);
    }
  });
}

advice(35)
  .then((data) => {
    console.log("Result:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
//----------------
const http = require("http");
const mongodb = require("mongodb");

// 2ta varibale and mongdb documation qarash kerak
let db;
const connectingString =
  "mongodb+srv://Raymond:6LFNNqhbGLuGAeQ3@raymond.dnaiuga.mongodb.net/Reja";
// bu method 3 ta parametr paste qilinadi, string, true, callback
mongodb.connect(
  connectingString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDb");
    else {
      console.log("MongoDB connection succeed");
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(`The server is running successfully on port: ${PORT},`);
      });
    }
  },
);
