// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Cors
app.use(cors());

// Session
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key', // Replace with a real secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

// Set Handlebars.
const Handlebars = require('handlebars')
const { engine } = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

app.engine("handlebars", engine({
  defaultLayout: "main",
  helpers: {
    eq: function (v1, v2) {
      return v1 === v2;
    }
  },
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set("view engine", "handlebars");
app.set('views', './views');

// Routes
// =============================================================
const authController = require("./controllers/auth.js");
const employeeController = require("./controllers/employee.js");
const managerController = require("./controllers/manager.js");
const viewController = require("./controllers/view.js");

app.use(authController);
app.use(employeeController);
app.use(managerController);
app.use(viewController);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
