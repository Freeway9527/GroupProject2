const { TeamMember } = require("../models");

const teamMemberData = [
  {
    first_name: "Xeng",
    last_name: "xiong",
    email: "xiongxeng@example.com",
    hire_date: "2022-01-15",
    salary: 50000,
    departmentId: 1, 
    //roleId: 1, // Will add roles once I have roles set up
    //managerId: 1, // Will add managers once I have managers set up
  },
  {
    first_name: "Riley",
    last_name: "Glander",
    email: "glanderriley@example.com",
    hire_date: "2022-01-15",
    salary: 50000,
    departmentId: 2, 
    //roleId: 1, // Will add roles once I have roles set up
    //managerId: 1, // Will add managers once I have managers set up
  },
  {
    first_name: "Kon",
    last_name: "Heu",
    email: "heukon@example.com",
    hire_date: "2022-01-15",
    salary: 50000,
    departmentId: 3, 
    //roleId: 1, // Will add roles once I have roles set up
    //managerId: 1, // Will add managers once I have managers set up
  },
  {
    first_name: "Alexander",
    last_name: "Sumpter",
    email: "sumpteralexander@example.com",
    hire_date: "2022-01-15",
    salary: 50000,
    departmentId: 4, 
    //roleId: 1, // Will add roles once I have roles set up
    //managerId: 1, // Will add managers once I have managers set up
  },
  {
    first_name: "Peter",
    last_name: "Newsome",
    email: "newsomepeter@example.com",
    hire_date: "2022-01-15",
    salary: 50000,
    departmentId: 1, 
    //roleId: 1, // Will add roles once I have roles set up
    //managerId: 1, // Will add managers once I have managers set up
  },
  // Add more employee objects as needed
];

const seedEmployees = () => {
  return TeamMember.bulkCreate(teamMemberData);
};

module.exports = seedEmployees;
