const http = require("http");
const mongodb = require("mongodb");
//app.set("db", db);

let db;
const connectingString =
  "mongodb+srv://Raymond:6LFNNqhbGLuGAeQ3@raymond.dnaiuga.mongodb.net/Reja";

mongodb.connect(
  connectingString,
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  },

  (err, client) => {
    if (err) console.log("ERROR on connection MongoDb");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
