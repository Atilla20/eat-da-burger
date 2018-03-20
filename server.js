const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

//for the static content

app.use(express.static("public"));

//parse application

app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json

app.use(bodyParser.json());

//Set Handlebars.

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import the routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
console.log(`App now listening at localhost: ${PORT}`)
});