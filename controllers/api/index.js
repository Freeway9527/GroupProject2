const router = require('express').Router();

const authRoutes = require('./authControl');
const departmentRoutes = require('./department-routes');
const staffRoutes = require('./staff-routes');

router.use('/auth', authRoutes);
router.use('/department', departmentRoutes);
router.use('/staff', staffRoutes);


module.exports = router;