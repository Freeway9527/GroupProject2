const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


// Define routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Handle 404 errors
router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
