const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// Import Sequelize connection
const sequelize = require('./config/connection');

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3001;

// Define session options
const sess = {
  secret: 'Super secret secret',
  cookie: { maxAge: 900000 }, // Session expires after 15 minutes of inactivity
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Set up session middleware
app.use(session(sess));

// Set up middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Define routes
const apiRoutes = require('./controllers/api');
const homeRoutes = require('./controllers/homeRoutes');

// Use routes
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).end('Not Found');
});

// Sync the Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
