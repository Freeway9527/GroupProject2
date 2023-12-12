const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); 
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Import Sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create instance of express
const app = express();

// Define port
const PORT = process.env.PORT || 3001; //change to 3001 for local testing

// Create Instance of Handlebars
const hbs = exphbs.create({ helpers }); 