// Setting the needed requirements and variables
const express = require("express"),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 8080,
  app = express(),
  exphbs = require("express-handlebars"),
  routes = require("./controllers/burgersController.js");

// Setting the 'public' folder as a static directory to serve to the app
app.use(express.static("public"));

// Setting up body-parser and handlebars
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setting routes
app.use(routes);

// Starting the server on localhost:8080
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
