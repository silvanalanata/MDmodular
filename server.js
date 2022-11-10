const myexpress = require("express");
const myapp = myexpress();
const mongoose = require("./server/config/mongoose");
const router = require("./server/config/routes");
myapp.use(router);

// solicita el body-parser
var bodyParser = require("body-parser");
myapp.use(bodyParser.urlencoded({ extended: true }));
myapp.use(myexpress.static(__dirname + "/static"));
myapp.set("views", __dirname + "/views");
myapp.set("view engine", "ejs");

myapp.listen(8000, function () {
  console.log("servidor ejecutandose en  http://localhost:8000");
});
