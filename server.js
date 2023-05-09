const sqlite3 = require("sqlite3").verbose();
const dotenv = require("dotenv");
const app = require("./app");

// connect environment file with our backend server
dotenv.config({
  path: "./config.env",
});

// listen a server
let port = process.env.PORT;
app.listen(port, function () {
  console.log("Server is running and port number is " + port);
});
