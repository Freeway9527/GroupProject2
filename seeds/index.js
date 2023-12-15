const sequelize = require('../config/connection');

const seedDepartments = require('./departmentData'); 
const seedEmployees = require('./teamMemberData');

const seedAll = async () => {
  await sequelize.sync({ force: true }); 
  
  // Call your individual seed functions here
  // Add other seed functions here
  await seedDepartments(); 
    await seedEmployees();
  
  
  
  process.exit(0); 
};

seedAll();
