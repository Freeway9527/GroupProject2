const { Department } = require("../models");

const departmentData = [
  {
    id: 1, // Custom department ID
    department_name: "HR",
    department_description: "Human Resources Department",
   
  },
  {
    id: 2, 
    department_name: "Finance",
    department_description: "Finance Department", 
  },
  {
    id: 3, 
    department_name: "Marketing",
    department_description: "Marketing Department", 
  },
  {
    id: 4, 
    department_name: "Sales",
    department_description: "Sales Department", 
  },
  {
    id: 5, 
    department_name: "Quality Assurance",
    department_description: "Quality Assurance Department", 
  },
  // Can add more department objects with custom IDs as needed
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
