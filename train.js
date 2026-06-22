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

/*function maslahatBering(a, Callback) {
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

console.log("passed here 0:");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("Javob:", data);
  }
});
console.log("passed here 1");*/

/* plan:
asynchronous coding
asynchronous funtions
promise funtions
callback vs asynchronous vs promise */
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
}

// async function call via then/catch --->
/*console.log("passed here 0:");
maslahatBering(60)
  .then((data) => {
    console.log("javob:", data);
  })

  .catch((err) => {
    console.log("ERROR", err);
  });
console.log("passed here 1"); */

//call -> asyns/await  (maydoncha) call --->
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
  javob = await maslahatBering(70);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
